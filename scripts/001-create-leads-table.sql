-- Create leads table for Arvea job offers
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  location VARCHAR(200) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  worked_online BOOLEAN NOT NULL,
  notes TEXT,
  privacy_consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_location ON leads(location);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy for admin access (you'll need to adjust this based on your auth setup)
CREATE POLICY "Admin can view all leads" ON leads
  FOR SELECT USING (true);

CREATE POLICY "Anyone can insert leads" ON leads
  FOR INSERT WITH CHECK (true);
