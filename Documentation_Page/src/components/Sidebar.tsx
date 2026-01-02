// src/components/Sidebar.tsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  LayoutDashboard,
  TrendingUp,
  Users,
  ShoppingCart,
  Wrench,
  FileText,
  Settings,
  Ticket,
  UserPlus,
  Scale,
  List,
  HandCoins,
  SquaresExclude,
  Import,
  Package,
  PackagePlus,
  ArrowLeftRight,
  CirclePlus,
  NotepadText,
  ChartColumn,
  CreditCard,
  Receipt,
  Container,
  Calendar,
  FileChartColumnIncreasing,
  FileUser,
  ReceiptPoundSterling,
  IndianRupee,
  User,
  Plus,
  Landmark,
  Tag,
  Folders,
  FolderOpen,
  Ruler,
  ShieldCheck,
  Store,
  Warehouse,
  Shield,
  Clock8,
  Bot,
  RefreshCw,
  Building,
  Languages,
  Sliders,
  Printer,
  Mail,
  Smartphone,
  Download,
  ArchiveRestore,
  DatabaseBackup,

} from "lucide-react";

type ChildItem = {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: ChildItem[];
};

type SidebarItem = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: ChildItem[];
};

// ---------- Menu data ----------
const sidebarItems: SidebarItem[] = [
  { id: "dashboard", label: "How to Start With Retailix", icon: LayoutDashboard },

  {
    id: "salesandexchange",
    label: "Sales And Exchange",
    icon: TrendingUp,
    children: [
      { id: "newsale", label: "How to Create New Sale", icon: Scale },
      { id: "salemanagement", label: "Sale Management", icon: List },
      {
        id: "thirdpartypayments",
        label: "What is Third Party Payments",
        icon: HandCoins,
      },
      {
        id: "newexchange",
        label: "How to Implement Exchnage",
        icon: SquaresExclude,
      },
      { id: "exchangemanagement", label: "Exchange Management", icon: List },
      { id: "possale", label: "What Is POS Sale", icon: ShoppingCart },
      { id: "import-sale", label: "How To Import Sale", icon: Import },
    ],
  },

  {
    id: "customers",
    label: "Customers",
    icon: Users,
    children: [
      { id: "add_customer", label: "Add Customer", icon: UserPlus },
      {
        id: "manage_customers",
        label: "What Is Manage Customers",
        icon: List,
      },
      {
        id: "add_bulk_customers",
        label: "How To Add Bulk Customers",
        icon: UserPlus,
      },
    ],
  },

  {
    id: "inventory",
    label: "Inventory",
    icon: Package,
    children: [
      { id: "addproduct", label: "How To Add Product", icon: PackagePlus },
      { id: "manage_products", label: "Manage Products", icon: List },
      {
        id: "stock_transfer",
        label: "How To Transfer Stock",
        icon: ArrowLeftRight,
      },
      {
        id: "import_products",
        label: "How To Import Products (CSV)",
        icon: FileText,
      },
      {
        id: "inventory_management",
        label: "What Is Inventory Management",
        icon: FileText,
      },
    ],
  },

  {
    id: "purchase",
    label: "Purchase",
    icon: ShoppingCart,
    children: [
      {
        id: "add_new_purchase",
        label: "How To Add New Purchase",
        icon: ShoppingCart,
      },
      {
        id: "purchase_management",
        label: "Purchase Management",
        icon: List,
      },
      {
        id: "purchase_transactions",
        label: "What Is Purchase Transactions",
        icon: List,
      },
      {
        id: "import_purchase",
        label: "Import Purchase (CSV)",
        icon: Import,
      },
    ],
  },

  {
    id: "supplier",
    label: "Supplier",
    icon: ShoppingCart,
    children: [
      { id: "add_supplier", label: "How To Add Supplier", icon: UserPlus },
      {
        id: "manage_suppliers",
        label: "What Is Suppliers Management",
        icon: List,
      },
    ],
  },

  {
    id: "service",
    label: "Service",
    icon: Wrench,
    children: [
      {
        id: "add_service_provider",
        label: "How To Add Service Provider",
        icon: CirclePlus,
      },
      {
        id: "manage_service_provider",
        label: "Manage Service Provider",
        icon: CirclePlus,
      },
      { id: "add_service", label: "How To Add Service", icon: CirclePlus },
      { id: "manage_service", label: "Manage Service", icon: NotepadText },
      {
        id: "register_service_request",
        label: "How To Register Service Request",
        icon: CirclePlus,
      },
      {
        id: "manage_service_request",
        label: "How To Manage Service Requests",
        icon: List,
      },
    ],
  },

  {
    id: "accounts",
    label: "Accounts",
    icon: ChartColumn,
    children: [
      {
        id: "service_payment",
        label: "What Is Service payment",
        icon: CreditCard,
      },
      {
        id: "manage_service_payment",
        label: "Manage Service Payment",
        icon: Receipt,
      },
      {
        id: "supplier_payments",
        label: "What Is Supplier Payment",
        icon: Container,
      },
      {
        id: "manage_supplier_payments",
        label: "How To Manage Supplier Payment",
        icon: List,
      },
    ],
  },

  {
    id: "lead-management",
    label: "Lead Management",
    icon: Users,
    children: [
      { id: "add_new_lead", label: "How To Add New Lead", icon: CirclePlus },
      { id: "manage_lead", label: "How To Manage Lead", icon: List },
    ],
  },

  {
    id: "human-resource",
    label: "Human Resource",
    icon: Users,
    children: [
      {
        id: "attendance",
        label: "Attendance",
        icon: Calendar,
        children: [
          {
            id: "employee_attendance",
            label: "What Is Employee Attendance",
            icon: UserPlus,
          },
          { id: "manage_attendance", label: "Manage Attendance", icon: List },
        ],
      },
      {
        id: "employee_management",
        label: "Employee Management",
        icon: Users,
        children: [
          {
            id: "add_new_employee",
            label: "How To Add New Employee",
            icon: UserPlus,
          },
          {
            id: "manage_employee",
            label: "What Is Manage Employee",
            icon: Users,
          },
        ],
      },
    ],
  },

  {
    id: "reports",
    label: "Explore Reports",
    icon: FileChartColumnIncreasing,
    children: [
      {
        id: "sales_reports",
        label: "Sales Reports",
        icon: FileChartColumnIncreasing,
        children: [
          {
            id: "sales_performance",
            label: "What Is Sales Performance",
            icon: TrendingUp,
          },
          {
            id: "daily_sales",
            label: "What Is Daily Sales",
            icon: FileChartColumnIncreasing,
          },
          {
            id: "top_bottom_sellers",
            label: "What Is Top/Bottom Sellers",
            icon: FileChartColumnIncreasing,
          },
          {
            id: "sales_by_items",
            label: "What Is Sales by Intems",
            icon: FileChartColumnIncreasing,
          },
          {
            id: "sales_by_category",
            label: "What Is Sales by Category",
            icon: FileChartColumnIncreasing,
          },
          {
            id: "margin_analysis",
            label: "What Is Margin Analysis",
            icon: FileChartColumnIncreasing,
          },
        ],
      },
      {
        id: "purchase-reports",
        label: "Purchase Reports",
        icon: ShoppingCart,
        children: [
          {
            id: "purchase_reports",
            label: "What Is Purchase Report",
            icon: FileChartColumnIncreasing,
          },
        ],
      },
      {
        id: "customer-reports",
        label: "Customer Reports",
        icon: FileUser,
        children: [
          {
            id: "customer_reports",
            label: "What Is Customer Report",
            icon: FileChartColumnIncreasing,
          },
        ],
      },
      {
        id: "supplier-reports",
        label: "Supplier Reports",
        icon: ReceiptPoundSterling,
        children: [
          {
            id: "supplier_txn_reports",
            label: "What Is Supplier Txn Report",
            icon: FileChartColumnIncreasing,
          },
        ],
      },
      {
        id: "inventory-reports",
        label: "Inventory Reports",
        icon: FileChartColumnIncreasing,
        children: [
          {
            id: "inventory_stock_reports",
            label: "What Is Inventory Stock Report",
            icon: FileChartColumnIncreasing,
          },
        ],
      },
      {
        id: "hrm-reports",
        label: "HRM Reports",
        icon: ChartColumn,
        children: [
          {
            id: "employee_reports",
            label: "What Is Employee Report",
            icon: User,
          },
          {
            id: "attendance_reports",
            label: "What Is Attendace Report",
            icon: FileChartColumnIncreasing,
          },
        ],
      },
      {
        id: "service-reports",
        label: "Service Reports",
        icon: FileChartColumnIncreasing,
        children: [
          {
            id: "service_reports",
            label: "What Is Service Report",
            icon: FileChartColumnIncreasing,
          },
        ],
      },
      {
        id: "third-party-reports",
        label: "Third Party Reports",
        icon: IndianRupee,
        children: [
          {
            id: "summary_reports",
            label: "What Is Summary Report",
            icon: FileChartColumnIncreasing,
          },
          {
            id: "detailed_reports",
            label: "What Is Detailed Report",
            icon: FileChartColumnIncreasing,
          },
        ],
      },
    ],
  },

  {
    id: "retailix-configuration",
    label: "Retailix Configuration",
    icon: Package,
    children: [
      {
        id: "inventory-masters",
        label: "Inventory Masters",
        icon: Users,
        children: [
          { id: "add_category", label: "How To Add category", icon: Folders },
          {
            id: "add_sub_category",
            label: "How To Add SubCategory",
            icon: FolderOpen,
          },
          { id: "add_brand", label: "How To Add Brand", icon: Tag },
          { id: "add_warranty", label: "How To Warranty", icon: ShieldCheck },
          {
            id: "add_measurement",
            label: "How To Add Unit Of measurement",
            icon: Ruler,
          },
          { id: "add_stores", label: "How To Add Stores", icon: Store },
          {
            id: "add_warehouses",
            label: "How To Add Warehouses",
            icon: Warehouse,
          },
        ],
      },
      {
        id: "bank",
        label: "Bank",
        icon: Landmark,
        children: [
          { id: "add_bank", label: "How To Add Bank", icon: CirclePlus },
          { id: "manage_bank", label: "How To Manage Bank", icon: List },
          {
            id: "manage_payment_methods",
            label: "How To Manage Payment Methods",
            icon: List,
          },
        ],
      },
      {
        id: "tax-management",
        label: "Tax Management",
        icon: Receipt,
        children: [
          { id: "add_tax", label: "How To Add Tax", icon: CirclePlus },
          { id: "manage_tax", label: "How To Manage Tax", icon: List },
        ],
      },
      {
        id: "discount-management",
        label: "Discount Management",
        icon: Tag,
        children: [
          {
            id: "add_discount",
            label: "How To Add Discount",
            icon: CirclePlus,
          },
          {
            id: "manage_discount",
            label: "How To Manage Discount",
            icon: List,
          },
        ],
      },
      {
        id: "Human-Resource",
        label: "Human Resource",
        icon: Users,
        children: [
          {
            id: "designation",
            label: "Designation",
            icon: FileChartColumnIncreasing,
            children:[
            {
            id: "add_designation",
            label: "How To Add Designation",
            icon: FileChartColumnIncreasing,
            
          },
          {
            id: "manage_designation",
            label: "How To Manage Designation",
            icon:Users,
            
          },

            ]

          },
          {
            id: "shift-management",
            label: "Shift",
            icon: Clock8,
            children:[
            {
            id: "add_shift",
            label: "How To Add Shift",
            icon: Clock8,
            
          },
          {
            id: "manage_shift",
            label: "How To Manage Shift",
            icon: List,
            
          },

            ]
          },
        ],
      },
    ],
  },

  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    children: [
      { 
      id: "software-settings",
      label: "Software Settings",
      icon: CreditCard,
      children: [
        {
          id: "manage_company",
          label: "Manage Company",
          icon: Building,
        },
        {
          id: "language",
          label: "Language",
          icon: Languages,
        },
        {
          id: "currency",
          label: "Currency",
          icon: IndianRupee,
        },
        {
          id: "general_settings",
          label: "General Settings",
          icon: Sliders,
        },
        {
          id: "print_settings",
          label: "Print Settings",
          icon: Printer,
        },
        {
          id: "mail_settings",
          label: "Mail Settings",
          icon: Mail,
        },
        {
          id: "invoice_settings",
          label: "Invoice Settings",
          icon: FileText,
        },
        {
          id: "app_settings",
          label: "App Settings",
          icon: Smartphone,
        },
        ],
       },
      {
        id: "ai_business_analyst",
        label: "What Is AI Business Analyst",
        icon: Bot,
        children:[
          {
          id:"ai_settings",
          label:"What Is AI Settings",
          icon:CreditCard,
          },
           {
          id:"ai_business_analyst_report",
          label:"AI Business Analyst Report",
          icon:CreditCard,
          },

        ],
      },
      {
        id: "role-permission",
        label: "What Is Role permission",
        icon: Shield,
        children:[
        {
        id: "add_role",
        label: "How To Add Role",
        icon: Shield,
        },
        {
        id: "manage_roles",
        label: "How To Manage Roles",
        icon: List,
        },
        {
        id: "user_assign_role",
        label: "How To Assign Role",
        icon: FileText,
        },

        ],
      },
      
      { id: "data-sync", label: "What Is Data Sync", icon: RefreshCw,
        children:[
        {
        id: "restore_data",
        label: "Restore Data",
        icon: ArchiveRestore,
        },
        {
        id: "import_data",
        label: "Import Data",
        icon: Download,
        },
        {
        id: "backup_data",
        label: "Backup Data",
        icon: DatabaseBackup,
        },

        ],
       },
    ],
  },

  {
    id: "support-ticket",
    label: "What Is Support Ticket",
    icon: Ticket,
    children: [
      { id: "create_ticket", label: "how To Create Ticket", icon: Plus },
      {
        id: "manage_ticket",
        label: "What Is Manage Ticket",
        icon: List,
      },
    ],
  },
];

// ---------- Routing map ----------
const routeById: Record<string, string> = {
  dashboard: "/dashboard",
  accounts: "/accounts",
  "add-new-customer": "/customers/add",
  inventory: "/inventory",
  "new-purchase": "/newpurchase",
  salesandexchange: "/salesandexchange",
  service: "/service",
  supplier: "/supplier",
  addproduct:"/addproduct",
  newsale:"/newsale",
  salemanagement:"/salemanagement",
  thirdpartypayments:"/thirdpartypayments",
  newexchange:"/newexchange",
  exchangemanagement:"/exchangemanagement",
  possale:"/possale",
  add_customer:"/addcustomer",
  manage_customers:"/managecustomers",
  add_bulk_customers:"/addbulkcustomers",
  manage_products:"/manageproducts",
  stock_transfer:"/stocktransfer",
  import_products:"/importproducts",
  inventory_management:"/inventorymanagement",
  add_new_purchase:"/addnewpurchase",
  purchase_management:"/purchasemanagement",
  purchase_transactions:"purchasetransactions",
  import_purchase:"/importpurchase",
  add_supplier:"/addsupplier",
  manage_suppliers:"/managesuppliers",
  supplier_payments:"/supplierpayments",
  manage_supplier_payments:"/managesupplierpayments",
  service_payment:"/servicepayment",
  manage_service_payment:"manageservicepayment",
  add_new_lead:"/addnewlead",
  manage_lead:"/managelead",
  employee_attendance:"/employeeattendance",
  manage_attendance:"/manageattendance",
  add_new_employee:"/addnewemployee",
  manage_employee:"/manageemployee",
  add_service_provider:"/addserviceprovider",
  manage_service_provider:"/manageserviceprovider",
  add_service:"/addservice",
  manage_service:"/manageservice",
  register_service_request:"/registerservicerequest",
  manage_service_request:"/manageservicerequest",
  sales_performance:"/salesperformance",
  daily_sales:"dailysales",
  top_bottom_sellers:"topbottomsellers",
  sales_by_items:"/salesbyitems",
  sales_by_category:"/salesbycategory",
  margin_analysis:"/marginanalysis",
  purchase_reports:"/purchasereports",
  customer_reports:"/customerreports",
  supplier_txn_reports:"/suppliertxnreports",
  inventory_stock_reports:"/inventorystockreports",
  employee_reports:"/hrmreports",
  attendance_reports:"/hrmreports",
  service_reports:"/servicereports",
  summary_reports:"/summaryreports",
  detailed_reports:"/detailedreports",
  create_ticket:"createticket",
  manage_ticket:"manageticket",
  add_category:"/addcategory",
  add_sub_category:"/addsubcategory",
  add_brand:"/addbrand",
  add_warranty:"/addwarranty",
  add_measurement:"/addmeasurement",
  add_stores:"/addstores",
  add_warehouses:"/addwarehouses",
  add_bank:"/addbank",
  manage_bank:"/managebank",
  manage_payment_methods:"/managepaymentmethods",
  add_tax:"/addtax",
  manage_tax:"/managetax",
  add_discount:"/adddiscount",
  manage_discount:"/managediscount",
  add_designation:"/adddesignation",
  manage_designation:"/managedesignation",
  add_shift:"/addshift",
  manage_shift:"manageshift",
  manage_company:"/managecompany",
  language:"/language",
  currency:"/currency",
  general_settings:"/generalsettings",
  print_settings:"/printsettings",
  mail_settings:"/mailsettings",
  invoice_settings:"/invoicesettings",
  app_settings:"/appsettings",
  ai_settings:"/aisettings",
  ai_business_analyst_report:"/aibusinessanalystreport",
  restore_data:"/restoredata",
  import_data:"/importdata",
  backup_data:"/backupdata",
  add_role:"/addrole",
  manage_roles:"/manageroles",
  user_assign_role:"/userassignrole",

};

// ---------- Sidebar component ----------
const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const [isExpanded, setIsExpanded] = useState(true);
  const [activeParentId, setActiveParentId] = useState<string>("dashboard");
  const [activeChildId, setActiveChildId] = useState<string | null>(null);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (id: string) => {
    setOpenGroups((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleParentClick = (id: string, hasChildren?: boolean) => {
  // ✅ Parent with children → ONLY expand / collapse
  if (hasChildren) {
    toggleGroup(id);
    setActiveParentId(id);
    setActiveChildId(null);
    return; // 🚨 STOP here (NO navigation)
  }

  // ✅ Leaf parent (no children) → navigate
  setActiveParentId(id);
  setActiveChildId(null);

  const path = routeById[id];
  if (path) {
    navigate(path);
  }
};



  const renderChildren = (
  children: ChildItem[],
  parentId: string,
  level = 1
) => {
  return (
    <div
  className="mt-1 space-y-1"
  style={{ paddingLeft: level * 12 }}
>

      {children.map((child) => {
        const ChildIcon = child.icon;
        const isActiveChild = activeChildId === child.id;
        const hasSubChildren = !!child.children?.length;
        const isOpen = openGroups[child.id];

        return (
          <div key={child.id}>
            <button
              onClick={() => {
                setActiveParentId(parentId);
                setActiveChildId(child.id);

                if (hasSubChildren) {
                  toggleGroup(child.id);
                }

                const path = routeById[child.id];
                if (!hasSubChildren){ 
                  if (path) {
                  navigate(path);
                }
                  else{
                    navigate("/under-development");
                  }
                }
              }
            }
              className={`flex items-center w-full rounded-md px-4 py-1.5 text-[10px] font-medium transition
                ${
                  isActiveChild
                    ? "bg-[#ff6908] text-white shadow-md"
                    : "text-slate-600 hover:bg-[#FFEFE2]"
                }`}
            >
              {ChildIcon && (
                <ChildIcon
                  className={`w-3 h-3 mr-2 ${
                    isActiveChild ? "text-white" : "text-slate-600"
                  }`}
                />
              )}
              <span className="text-[11px]">{child.label}</span>

              {hasSubChildren && (
                <ChevronDown
                  className={`ml-auto w-3 h-3 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>

            {/* 🔥 THIS renders sub-children */}
            {hasSubChildren && isOpen && (
              <div className="pl-3">
                {renderChildren(child.children!, parentId, level + 1)}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};



  return (
    <aside
      className={`bg-gray-50 border-r border-slate-300 h-screen
        flex flex-col transition-all duration-200 
        ${isExpanded ? "w-66" : "w-16"}`}
    >
      {/* Top: logo + collapse button */}
      <div className="bg-white flex items-center justify-between px-6 py-3 border-b border-slate-300">
        <div className="flex items-center gap-2 ">
          {isExpanded && (
            <div className="h-7 w-7 rounded-md bg-[#ff6908] flex items-center justify-center text-white font-bold text-xs">
              RX
            </div>
          )}

          {isExpanded && (
            <div className="leading-tight">
              <div className="font-bold text-[14px]">RetailiX</div>
              <div className="text-[12px] text-slate-500">Business Suite</div>
            </div>
          )}
        </div>

        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="p-3 rounded-full text-[#ff6908] hover:bg-[#ff6908]/10 px-1 items-center "
        >
          {isExpanded ? (
            <ChevronLeft className="w-4 h-4 "  />
          ) : (
            <ChevronRight className="w-4 h-4  " />
          )}
        </button>
      </div>

      {/* Menu */}
      <nav className="mt-2 space-y-[6px] px-1 overflow-y-auto pb-1">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const hasChildren = !!item.children?.length;
          const isOpen = openGroups[item.id];
          const isActiveParent = activeParentId === item.id;

          return (
            <div key={item.id}>
              {/* Parent row */}
              <button
                onClick={() => handleParentClick(item.id, hasChildren)}
                className={`group flex items-center w-full rounded-lg px-4 py-2 text-[12px] font-medium
                  transition
                  ${
                    isActiveParent
                      ? "bg-[#ff6908] text-white shadow-md"
                      : "text-slate-700 hover:bg-slate-100"
                  }
                  ${isExpanded ? "justify-between" : "justify-center"}`}
              >
                <div
                  className={`flex items-center ${
                    isExpanded ? "gap-3" : "justify-center"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      isActiveParent ? "text-white" : "text-slate-700"
                    }`}
                  />
                  {isExpanded && <span>{item.label}</span>}
                </div>

                {isExpanded && hasChildren && (
                  <ChevronDown
                    className={`w-3 h-3 transition-transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    } ${isActiveParent ? "text-white" : "text-slate-400"}`}
                  />
                )}
              </button>

              {/* Children */}
              {isExpanded && hasChildren && isOpen && (
                <div className="mt-2 pl-2 space-y-[-1px] text-[2px]">
                  {renderChildren(item.children!, item.id)}

                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
