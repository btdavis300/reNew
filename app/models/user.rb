class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true

    has_many :archive_articles, dependent: :destroy
    has_many :comments
end
