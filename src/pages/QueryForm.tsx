"use client"

import React from "react"

import { useState } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux"
import { submitQueryRequest, resetQueryForm } from "@/lib/slices/formSlice"

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    organization: "",
    officeAddress: "",
    city: "",
    email: "",
    telephone: "",
    mobile: "",
    updates: "yes",
    subject: "",
    query: "",
  })

  const dispatch = useAppDispatch()
  const { loading, success, error } = useAppSelector((state) => state.forms.query)
  const { toast } = useToast()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(submitQueryRequest(formData))
  }

  React.useEffect(() => {
    if (success) {
      toast({
        title: "Query Submitted!",
        description: "Thank you! Our team will reach out to you shortly.",
      })
      setFormData({
        name: "",
        designation: "",
        organization: "",
        officeAddress: "",
        city: "",
        email: "",
        telephone: "",
        mobile: "",
        updates: "yes",
        subject: "",
        query: "",
      })
      dispatch(resetQueryForm())
    }
    if (error) {
      toast({
        title: "Submission Failed",
        description: error,
        variant: "destructive",
      })
    }
  }, [success, error, dispatch, toast])

  const subjects = [
    "Income Tax",
    "Audit",
    "Service Tax",
    "Company Law",
    "Excise Duty",
    "Customs",
    "Wealth Tax",
    "Sales Tax / Value Added Tax",
    "FEMA",
    "RBI",
    "Labour Law",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-background mt-10">
      <Header />

      <section className="pt-24 pb-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">We’re Here to Help</h1>
          <p className="text-lg text-white/80">Submit your query and get a prompt response from our experts.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Card wrapper */}
          <div className="bg-white shadow-2xl rounded-2xl p-10 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label>Name *</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <Label>Designation</Label>
                  <Input
                    value={formData.designation}
                    onChange={(e) => handleInputChange("designation", e.target.value)}
                    placeholder="Enter your designation"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label>Organization</Label>
                  <Input
                    value={formData.organization}
                    onChange={(e) => handleInputChange("organization", e.target.value)}
                    placeholder="Enter organization"
                  />
                </div>
                <div>
                  <Label>Office Address</Label>
                  <Input
                    value={formData.officeAddress}
                    onChange={(e) => handleInputChange("officeAddress", e.target.value)}
                    placeholder="Enter office address"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label>City *</Label>
                  <Input
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    required
                    placeholder="Enter city"
                  />
                </div>
                <div>
                  <Label>Email Address *</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    placeholder="Enter email address"
                  />
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label>Telephone No.</Label>
                  <Input
                    value={formData.telephone}
                    onChange={(e) => handleInputChange("telephone", e.target.value)}
                    placeholder="Enter telephone no."
                  />
                </div>
                <div>
                  <Label>Mobile *</Label>
                  <Input
                    value={formData.mobile}
                    onChange={(e) => handleInputChange("mobile", e.target.value)}
                    required
                    placeholder="Enter mobile no."
                  />
                </div>
              </div>

              {/* Row 5 - Updates */}
              <div>
                <Label>Other professional updates *</Label>
                <RadioGroup
                  value={formData.updates}
                  onValueChange={(value) => handleInputChange("updates", value)}
                  className="flex space-x-6 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Row 6 - Subject */}
              <div>
                <Label>Subject of Query *</Label>
                <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="----- Please Select -----" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subj) => (
                      <SelectItem key={subj} value={subj}>
                        {subj}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Row 7 - Query */}
              <div>
                <Label>Query *</Label>
                <Textarea
                  value={formData.query}
                  onChange={(e) => handleInputChange("query", e.target.value)}
                  required
                  rows={5}
                  placeholder="Enter your query here..."
                />
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <Button type="button" variant="outline" onClick={() => window.history.back()} disabled={loading}>
                  Back
                </Button>
                <Button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default QueryForm
