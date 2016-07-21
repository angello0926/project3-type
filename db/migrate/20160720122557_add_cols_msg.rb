class AddColsMsg < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :chatroom_id, :integer
    rename_column :messages, :sender, :user_id
  end
end
