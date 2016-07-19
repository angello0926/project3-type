class ChangeIdName < ActiveRecord::Migration
  def change
    rename_column :users, :numberology_id, :numerology_id
  end
end
