class RenameTitleToPost < ActiveRecord::Migration[7.0]
  def change
    rename_table :titles , :posts
  end
end
