import { LeadsTable } from "@/components/leads-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminLeadsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Arvea Leads Dashboard</CardTitle>
          <CardDescription>Manage and view all submitted leads from the Arvea job offers landing page.</CardDescription>
        </CardHeader>
        <CardContent>
          <LeadsTable />
        </CardContent>
      </Card>
    </div>
  )
}
