class CreateMbtis < ActiveRecord::Migration
  def change
    create_table :mbtis do |t|
      t.string :name
      t.text :description
      t.text :strength
      t.text :weakness
      t.string :image_URL

      t.timestamps null: false
    end
  end
end
