class AddImgCol < ActiveRecord::Migration
  def change
    add_column :users, :imgURL, :string
  end
end
