class ArchiveArticlesController < ApplicationController

    def create
        article = ArchiveArticle.create!(article_params)
        render json: article, status: :created  
    end

private

    def article_params
        params.permit(:user_id, :title, :author, :published_date, :abstract, :url, :image, :min_read)
    end
end
