class ArchiveArticlesController < ApplicationController

    def create
        article = ArchiveArticle.create!(article_params)
        render json: article, status: :created  
    end

    def user_archives
        articles = ArchiveArticle.where(user_id: params[:user_id])
        render json: articles, status: :ok
    end

private

    def article_params
        params.permit(:user_id, :title, :author, :published_date, :abstract, :url, :image, :min_read)
    end
end
