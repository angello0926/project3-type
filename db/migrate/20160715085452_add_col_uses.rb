class AddColUses < ActiveRecord::Migration
  def change
    add_column :users, :birthday, :string
    add_column :users, :region, :string
  end
end
