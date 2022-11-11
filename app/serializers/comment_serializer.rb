class CommentSerializer < ActiveModel::Serializer
  attributes :id, :article_url, :content, :user, :created_at

  def user
      "#{object.user.username}"
  end
end
