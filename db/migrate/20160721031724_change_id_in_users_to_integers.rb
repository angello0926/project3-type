class ChangeIdInUsersToIntegers < ActiveRecord::Migration
  def up
    execute 'ALTER TABLE users ALTER COLUMN mbti_id TYPE integer USING (mbti_id::integer)'
    execute 'ALTER TABLE users ALTER COLUMN numerology_id TYPE integer USING (numerology_id::integer)'
    execute 'ALTER TABLE users ALTER COLUMN horoscope_id TYPE integer USING (horoscope_id::integer)'
  end

  def down
    execute 'ALTER TABLE users ALTER COLUMN mbti_id TYPE text USING (mbti_id::text)'
    execute 'ALTER TABLE users ALTER COLUMN numerology_id TYPE text USING (numerology_id::text)'
    execute 'ALTER TABLE users ALTER COLUMN horoscope_id TYPE text USING (horoscope_id::text)'
  end
end
