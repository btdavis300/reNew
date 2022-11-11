class CommentSerializer < ActiveModel::Serializer
  attributes :id, :article_url, :content, :user, :posted
  require 'date'

  def user
      "#{object.user.username}"
  end

  def posted
    date = Date.today
    time = object.created_at.strftime("%I:%M %p")
    "#{time} #{date}"
  end

end
