class CreateArchiveArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :archive_articles do |t|
      t.integer :user_id
      t.string :title
      t.string :author
      t.string :published_date
      t.string :abstract
      t.string :url
      t.string :image
      t.string :min_read

      t.timestamps
    end
  end
end
