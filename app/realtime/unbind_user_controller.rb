class UnbindUserController
  MONITORED_CHANNELS = [ '/meta/disconnect' ]

  def incoming(message, callback)
    return callback.call(message) unless MONITORED_CHANNELS.include? message['channel']
    puts message.inspect

    current_user = User.find_by(chat_client_id: message["clientId"])

    if current_user
      faye_client.publish('/chat', { message: "#{current_user.email.upcase} has Left!", created_at: Time.now })

      current_user.update(chat_online: false, chat_client_id: nil)
    end

    callback.call(message)
  end

  def faye_client
    @faye_client ||= Faye::Client.new(ENV['FAYE_SERVER_END_POINT'])
  end
end