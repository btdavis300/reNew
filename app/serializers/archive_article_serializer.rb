class ArchiveArticleSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :author, :published_date, :abstract, :url, :image, :min_read
end
