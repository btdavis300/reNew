class ChangeArticleTitleToArticleUrlInComments < ActiveRecord::Migration[7.0]
  def change
    rename_column :comments, :article_title, :article_url
  end
end
