CREATE TABLE posts (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title         text NOT NULL,
  slug          text NOT NULL UNIQUE,
  content       text NOT NULL DEFAULT '',
  category      text NOT NULL DEFAULT 'Update',
  sponsor_name  text,
  published_at  timestamptz NOT NULL DEFAULT now(),
  created_at    timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_posts" ON posts FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "insert_posts" ON posts FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "update_posts" ON posts FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_posts" ON posts FOR DELETE TO authenticated USING (true);

-- Seed a couple of demo posts so the blog isn't empty
INSERT INTO posts (title, slug, content, category, sponsor_name, published_at) VALUES
(
  'We Competed at the Regional Qualifier!',
  'regional-qualifier-2025',
  'We had an incredible time at the regional VEX IQ qualifier. After months of late-night build sessions and countless hours tuning our autonomous routine, HABS Vortex took to the field for the first time this season.

Our robot performed brilliantly in the teamwork challenge, achieving a personal best score of 142 points in our final run. The driver skills run also went smoothly, putting us in a strong position on the leaderboard.

A huge thank you to our coaches, families, and everyone who came out to support us. We are now looking ahead to the next regional event and are already making improvements based on what we learned today.

Stay tuned for more updates as we push towards nationals!',
  'Competition Update',
  NULL,
  '2025-11-15 10:00:00+00'
),
(
  'Welcome Aboard, Our New Sponsor!',
  'sponsor-spotlight-techcorp',
  'We are thrilled to announce that TechCorp Ltd has joined HABS Vortex as a Gold Tier sponsor for the 2025–26 season.

TechCorp''s generous support will allow us to upgrade our robot components, cover travel expenses to competitions, and invest in new design and coding tools. Their belief in student engineering means the world to us.

As part of our Gold Tier partnership, TechCorp''s logo will appear on all of our team merchandise and we will be showcasing their brand at every regional, national, and — fingers crossed — world competition we attend.

Thank you, TechCorp, for making our season possible. We cannot wait to make you proud on the field!',
  'Sponsor Spotlight',
  'TechCorp Ltd',
  '2025-10-01 09:00:00+00'
);
