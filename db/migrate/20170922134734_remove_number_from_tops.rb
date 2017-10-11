class RemoveNumberFromTops < ActiveRecord::Migration
  def change
   remove_column :tops, :number, :string
  end
end
