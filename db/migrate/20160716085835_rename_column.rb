class RenameColumn < ActiveRecord::Migration
  def change
    rename_column :horoscopes, :type, :name
    rename_column :numerologies, :type, :name
  end
end
