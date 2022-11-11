class CommentSerializer < ActiveModel::Serializer
  attributes :id, :article_url, :content, :user, :posted

  def user
      "#{object.user.username}"
  end

  def posted
    "#{object.created_at.strftime("%I:%M %p")}"
  end
  
end
