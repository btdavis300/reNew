class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :email, :image

  has_many :archive_articles
  has_many :comments
end
