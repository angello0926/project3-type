class ChangeColUsers < ActiveRecord::Migration
  def change
    add_column :users, :birth_dd, :integer
    add_column :users, :birth_mm, :integer
    add_column :users, :birth_yy, :integer
  end
end
