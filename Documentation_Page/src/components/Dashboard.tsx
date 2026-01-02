// src/components/Dashboard.tsx
import React, { useState } from "react"
import {
  Card,
  CardHeader,
  CardIcon,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/Card"
import { cn } from "../lib/utils"

type Step = {
  id: number
  title: string
  subtitle: string
  icon: string
  bullets: string[]
  cta: string
}

const STEPS: Step[] = [
  {
    id: 0,
    title: "Software Settings",
    subtitle: "Get started in under 2 minutes with our smart setup wizard.",
    icon: "👤",
    bullets: ["Manage Company", "Business Details", "Human Resources (Optional)"],
    cta: "Explore Software Settings",
  },
  {
    id: 1,
    title: "RetailiX Configuration",
    subtitle: "Configure masters, taxes, discounts and more.",
    icon: "👥",
    bullets: ["Inventory Master", "Tax & Pricing", "Bank & Payments"],
    cta: "Explore Configuration",
  },
  {
    id: 2,
    title: "Supplier",
    subtitle: "Set up suppliers for purchases and payments.",
    icon: "📈",
    bullets: ["Add Supplier", "Supplier Ledger", "Opening Balance"],
    cta: "Explore Suppliers",
  },
  {
    id: 3,
    title: "Customer",
    subtitle: "Capture and manage your customer database.",
    icon: "📊",
    bullets: ["Add Customer", "Customer Pricing", "Customer Groups"],
    cta: "Explore Customers",
  },
  {
    id: 4,
    title: "Inventory",
    subtitle: "Control stock, SKUs, stores and warehouses.",
    icon: "📦",
    bullets: ["Add Product", "Brand / Category", "Stores & Warehouses"],
    cta: "Explore Inventory",
  },
  {
    id: 5,
    title: "Purchase",
    subtitle: "Manage purchase orders, GRNs and bills.",
    icon: "🧾",
    bullets: ["Create Purchase Order", "GRN / Bill Posting", "Supplier Outstanding"],
    cta: "Explore Purchase",
  },
  {
    id: 6,
    title: "Sales & Exchange",
    subtitle: "Start billing customers and handle exchanges.",
    icon: "💳",
    bullets: ["POS Sale", "Exchange", "New Sale"],
    cta: "Explore Sales & Exchange",
  },
]

const HIGHLIGHT_TAGS = [
  { label: "Easy Setup", sub: "Go live in minutes", icon: "⚡" },
  { label: "Everything Automated", sub: "Billing, stock & reports", icon: "🤖" },
  { label: "Retail-First Design", sub: "Built for Indian stores", icon: "🛍️" },
]

const Dashboard: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(0)
  const activeStep: Step = STEPS.find((s) => s.id === activeId) ?? STEPS[0]
  const totalSteps = STEPS.length
  const currentStepNumber = activeId + 1
  const progressPercent = Math.round((currentStepNumber / totalSteps) * 100)

  return (
    <section className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-slate-50 via-white to-orange-50/40 px-4 md:px-4 py-4">
      <div className="max-w-6xl w-full mx-auto">
        {/* Heading */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50/60 px-3 py-1 text-[11px] font-medium text-orange-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
            Onboarding Guide · Finish in a few steps
          </div>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Getting Started with <span className="text-orange-500">RetailiX</span>
          </h2>

          <p className="mt-2 text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
            Follow these guided steps to set up your business and begin billing,
            tracking and analysing your performance.
          </p>
        </div>

        {/* Highlight Tags */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {HIGHLIGHT_TAGS.map((tag) => (
            <div
              key={tag.label}
              className="flex items-center gap-3 rounded-2xl bg-white/80 border border-orange-100 shadow-sm px-4 py-3 hover:shadow-md hover:border-orange-200 transition"
            >
              <div className="h-9 w-9 flex items-center justify-center rounded-full bg-orange-50 text-lg">{tag.icon}</div>
              <div>
                <p className="text-[13px] font-semibold text-slate-900">{tag.label}</p>
                <p className="text-[11px] text-slate-500">{tag.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main layout: LEFT steps + RIGHT schema-only card */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* LEFT: steps list */}
          <div className="relative md:w-1/2 w-full">
            <div className="hidden md:block absolute left-4 top-2 bottom-2 border-l border-slate-200" />

            <div className="space-y-5 md:pl-10 max-h-[80vh] overflow-y-auto pr-2 scrollbar-hide">
              {STEPS.map((step) => {
                const isActive = step.id === activeId
                return (
                  <button
                    key={step.id}
                    type="button"
                    className="relative flex text-left w-full"
                    onMouseEnter={() => setActiveId(step.id)}
                    onClick={() => setActiveId(step.id)}
                  >
                    {/* node bullet */}
                    <div className="hidden md:flex absolute -left-10 top-3">
                      <div
                        className={cn(
                          "h-4 w-4 rounded-full border-[2px] border-slate-300 bg-white transition-all",
                          isActive && "bg-orange-500 border-none shadow-[0_0_0_5px_rgba(249,115,22,0.25)]"
                        )}
                      />
                    </div>

                    <div
                      className={cn(
                        "rounded-xl w-full px-4 py-3 transition-all hover:bg-white hover:shadow-sm",
                        isActive && "bg-white shadow-md border border-orange-100"
                      )}
                    >
                      <p className="text-[11px] uppercase tracking-wide text-slate-400 mb-0.5">
                        Step {step.id + 1}
                      </p>
                      <h3 className={cn("text-base font-semibold", isActive ? "text-slate-900" : "text-slate-600")}>
                        {step.title}
                      </h3>
                      <p className={cn("mt-1 text-xs", isActive ? "text-orange-500" : "text-slate-400")}>
                        {step.subtitle}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* RIGHT: schema-only Card column */}
          <div className="md:w-1/2 w-full mt-4 md:mt-0">
            <div className="sticky top-80">
              <Card className="border border-orange-100/50 shadow-lg shadow-orange-100/50 bg-white/90 backdrop-blur-sm relative overflow-hidden animate-soft-pop">
                {/* soft background glow */}
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-orange-100/50 blur-2xl" />

                <CardHeader>
                  <div className="flex flex-col gap-3 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-500 border border-slate-100">
                        Step {currentStepNumber} of {totalSteps} · {progressPercent}%
                      </span>

                      <CardIcon>{activeStep.icon}</CardIcon>
                    </div>

                    <div>
                      <CardTitle>{activeStep.title}</CardTitle>
                      <CardDescription className="mt-1">{activeStep.subtitle}</CardDescription>
                    </div>

                    {/* progress bar */}
                    <div className="mt-1">
                      <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full rounded-full bg-orange-500 transition-all" style={{ width: `${progressPercent}%` }} />
                      </div>
                    </div>
                  </div>
                </CardHeader>

                {/* SCHEMA-ONLY CardContent */}
                <CardContent className="space-y-3 mt-3">
                  <h4 className="text-sm font-semibold text-slate-800">Sections in {activeStep.title}</h4>

                  <div className="flex flex-col gap-3">
                    {activeStep.bullets.map((bullet: string, idx: number) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          // schema-only click handler; later replace with navigation
                          // keep console log for quick dev testing
                          // eslint-disable-next-line no-console
                          console.log("Schema click:", { stepId: activeStep.id, bulletIdx: idx, bullet })
                        }}
                        className={cn(
                          "w-full text-left rounded-lg px-4 py-3 bg-white hover:bg-white/60 shadow-sm border border-slate-100 transition"
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 text-orange-500">✓</span>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-slate-900">{bullet}</p>
                            <p className="text-[11px] text-slate-500 mt-0.5">
                               short description for “{bullet}”. 
                            </p>
                          </div>

                          <div className="text-[11px] text-slate-400">Open</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => {
                      // schema-only CTA — just log for now
                      // eslint-disable-next-line no-console
                      console.log("CTA clicked for step", activeStep.id)
                    }}
                    className="inline-flex items-center rounded-full bg-orange-500 px-4 py-1.5 text-xs font-semibold text-white shadow hover:bg-orange-600 transition"
                  >
                    {activeStep.cta}
                  </button>

                  <div className="flex gap-3 text-[10px] text-slate-400">
                    <div className="flex flex-col items-end">
                      <span className="font-semibold text-slate-600 text-xs">1000+ stores</span>
                      <span>already onboarded</span>
                    </div>

                    <span className="h-8 w-px bg-slate-200" />

                    <div className="flex flex-col items-end">
                      <span className="font-semibold text-slate-600 text-xs">No setup fees</span>
                      <span>cancel anytime</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
