class ProfilesController < ApplicationController
  def profile
    @user = User.first.user_conversation_relationships
    @recipient = User.first.recipients
    render json: {user: @user, recipients: @recipient}

    # var data = {
    #   "images": [{
    #     "bannerImg1": "http://i.stack.imgur.com/HXS1E.png?s=32&g=1"
    #   },
    #   {"bannerImg1" : "http://i.stack.imgur.com/8ywqe.png?s=32&g=1"
    #   }]
    # };
    # data.images.forEach( function(obj) {
    #   var img = new Image();
    #   img.src = obj.bannerImg1;
    #   img.setAttribute("class", "banner-img");
    #   img.setAttribute("alt", "effy");
    #   document.getElementById("img-container").appendChild(img);
    # });
  end
end
