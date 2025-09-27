"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface Lead {
  id: string
  first_name: string
  last_name: string
  location: string
  phone: string
  worked_online: boolean
  notes: string
  privacy_consent: boolean
  created_at: string
}

export function LeadsTable() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    try {
      const response = await fetch("/api/admin/leads")
      if (!response.ok) {
        throw new Error("Failed to fetch leads")
      }
      const data = await response.json()
      setLeads(data.leads || [])
    } catch (error) {
      console.error("Error fetching leads:", error)
      toast({
        title: "Error",
        description: "Failed to load leads data",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (loading) {
    return <div className="text-center py-8">Loading leads...</div>
  }

  if (leads.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No leads found. When users submit the form, they will appear here.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Total Leads: {leads.length}</h3>
        <Button onClick={fetchLeads} variant="outline" size="sm">
          Refresh
        </Button>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Notes</TableHead>
              <TableHead>Submitted</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell className="font-medium">
                  {lead.first_name} {lead.last_name}
                </TableCell>
                <TableCell>{lead.location}</TableCell>
                <TableCell>
                  <a href={`tel:${lead.phone}`} className="text-primary hover:underline">
                    {lead.phone}
                  </a>
                </TableCell>
                <TableCell>
                  <Badge variant={lead.worked_online ? "default" : "secondary"}>
                    {lead.worked_online ? "Experienced" : "Beginner"}
                  </Badge>
                </TableCell>
                <TableCell className="max-w-xs">
                  <div className="truncate" title={lead.notes}>
                    {lead.notes || "No notes"}
                  </div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{formatDate(lead.created_at)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
