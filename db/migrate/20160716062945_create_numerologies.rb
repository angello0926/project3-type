class CreateNumerologies < ActiveRecord::Migration
  def change
    create_table :numerologies do |t|
      t.string :type
      t.text :description
      t.text :strength
      t.text :weakness
      t.string :image_URL

      t.timestamps null: false
    end
  end
end
