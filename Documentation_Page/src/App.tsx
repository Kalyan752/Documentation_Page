// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import AddProduct from "./components/Pages/AddProduct.tsx";
import NewSale from "./components/Pages/SalesAndExchange/NewSale";
import SaleManagement from "./components/Pages/SalesAndExchange/SaleManagement";
import ThirdPartyPayments from "./components/Pages/SalesAndExchange/ThirdPartyPayments";
import NewExchange from "./components/Pages/SalesAndExchange/NewExchange";
import ExchangeManagement from "./components/Pages/SalesAndExchange/EXchangeManagement";
import POSSale from "./components/Pages/SalesAndExchange/POSSale.tsx";
import AddCustomer from "./components/Pages/Customer/AddCustomer.tsx";
import ManageCustomers from "./components/Pages/Customer/ManageCustomers.tsx";
import AddBulkCustomers from "./components/Pages/Customer/AddBulkCustomers.tsx";
import ManageProducts from "./components/Pages/Inventory/ManageProducts.tsx";
import StockTransfer from "./components/Pages/Inventory/StockTransfer.tsx";
import ImportProducts from "./components/Pages/Inventory/ImportProducts.tsx";
import InventoryManagement from "./components/Pages/Inventory/InventoryManagement.tsx";
import AddNewPurchase from "./components/Pages/Purchase/AddNewPurchase.tsx";
import PurchaseManagement from "./components/Pages/Purchase/PurchaseManagement.tsx";
import PurchaseTransactions from "./components/Pages/Purchase/PurchaseTransactions.tsx";
import AddSupplier from "./components/Pages/Supplier/AddSupplier.tsx";
import SuppliersManagement from "./components/Pages/Supplier/SuppliersManagement.tsx";
import SupplierPayment from "./components/Pages/Accounts/SupplierPayment.tsx";
import ManageSuppliersPayment from "./components/Pages/Accounts/ManageSuppliersPayment.tsx";
import AddNewLead from "./components/Pages/Leadmanagement/AddNewLead.tsx";
import ManageLead from "./components/Pages/Leadmanagement/ManageLead.tsx";
import AddAttendance from "./components/Pages/HumanResource/Attendance/AddAttendance.tsx";
import ManageAttendance from "./components/Pages/HumanResource/Attendance/ManageAttendance.tsx";
import AddNewEmployee from "./components/Pages/HumanResource/EmployeeManagement/AddNewEmployee.tsx";
import ManageEmployee from "./components/Pages/HumanResource/EmployeeManagement/ManageEmployee.tsx";
import UnderDevelopment from "./components/Pages/UnderDevelopment";
import AddServiceProvider from "./components/Pages/Service/AddServiceProvider.tsx";
import ManageServiceProvider from "./components/Pages/Service/ManageServiceProvider.tsx";
import AddService from "./components/Pages/Service/AddService.tsx";
import ManageService from "./components/Pages/Service/ManageService.tsx";
import RegisterServiceRequest from "./components/Pages/Service/RegisterServiceRequest.tsx";
import ManageServiceRequest from "./components/Pages/Service/ManageServiceRequest.tsx";
import ServicePayment from "./components/Pages/Accounts/ServicePayment.tsx";
import ManageServicePayment from "./components/Pages/Accounts/ManageServicePayment.tsx";
import SalesPerformance from "./components/Pages/ExploreReports/SalesReports/SalesPerformance.tsx";
import DailySales from "./components/Pages/ExploreReports/SalesReports/DailySales.tsx";
import TopBottomSellers from "./components/Pages/ExploreReports/SalesReports/TopBottomSellers.tsx";
import SalesByItems from "./components/Pages/ExploreReports/SalesReports/SalesByItems.tsx";
import SalesByCategory from "./components/Pages/ExploreReports/SalesReports/SalesByCategory.tsx";
import MarginAnalysis from "./components/Pages/ExploreReports/SalesReports/MarginAnalysis.tsx";
import PurchaseReports from "./components/Pages/ExploreReports/PurchaseReport.tsx";
import CustomerReports from "./components/Pages/ExploreReports/CustomerReports.tsx";
import SupplierReports from "./components/Pages/ExploreReports/SupplierReports.tsx";
import InventoryStockReports from "./components/Pages/ExploreReports/InventoryStockReports.tsx";
import HRMReports from "./components/Pages/ExploreReports/HRMReports.tsx";
import ServiceReports from "./components/Pages/ExploreReports/ServiceReports.tsx";
import SummaryReport from "./components/Pages/ExploreReports/ThirdPartyReports/SummaryReport.tsx";
import DetailedReport from "./components/Pages/ExploreReports/ThirdPartyReports/DetailedReport.tsx";
import CreateTicket from "./components/Pages/SupportTicket/CreateTicket.tsx";
import ManageTicket from "./components/Pages/SupportTicket/ManageTicket.tsx";
import AddCategory from "./components/Pages/RetailixConfiguration/InventoryMasters/AddCategory.tsx";
import AddSubCategory from "./components/Pages/RetailixConfiguration/InventoryMasters/AddSubCategory.tsx";
import AddBrand from "./components/Pages/RetailixConfiguration/InventoryMasters/AddBrand.tsx";
import AddWarranty from "./components/Pages/RetailixConfiguration/InventoryMasters/AddWarranty.tsx";
import AddMeasurement from "./components/Pages/RetailixConfiguration/InventoryMasters/AddMeasurement.tsx";
import AddStores from "./components/Pages/RetailixConfiguration/InventoryMasters/AddStores.tsx";
import AddWarehouses from "./components/Pages/RetailixConfiguration/InventoryMasters/AddWarehouses.tsx";
import AddBank from "./components/Pages/RetailixConfiguration/Bank/AddBank.tsx";
import ManageBank from "./components/Pages/RetailixConfiguration/Bank/ManageBank.tsx";
import ManagePaymentMethods from "./components/Pages/RetailixConfiguration/Bank/ManagePaymentMethods.tsx";
import AddTax from "./components/Pages/RetailixConfiguration/TaxManagement/AddTax.tsx";
import ManageTax from "./components/Pages/RetailixConfiguration/TaxManagement/ManageTax.tsx";
import AddDiscount from "./components/Pages/RetailixConfiguration/DiscountManagement/AddDiscount.tsx";
import AddDesignation from "./components/Pages/RetailixConfiguration/HumanResource/Designation/AddDesignation.tsx";
import AddShift from "./components/Pages/RetailixConfiguration/HumanResource/Shift/AddShift.tsx";
import ManageCompany from "./components/Pages/Settings/SoftwareSettings/ManageCompany.tsx";
import Language from "./components/Pages/Settings/SoftwareSettings/Language.tsx";
import Currency from "./components/Pages/Settings/SoftwareSettings/Currency.tsx";
import GeneralSettings from "./components/Pages/Settings/SoftwareSettings/GeneralSettings.tsx";
import PrintSettings from "./components/Pages/Settings/SoftwareSettings/PrintSettings.tsx";
import MailSettings from "./components/Pages/Settings/SoftwareSettings/MailSettings.tsx";
import InvoiceSettings from "./components/Pages/Settings/SoftwareSettings/InvoiceSettings.tsx";
import AppSettings from "./components/Pages/Settings/SoftwareSettings/AppSettings.tsx";
import AI_Settings from "./components/Pages/Settings/AI_BusinessAnalyst/AI_Settings.tsx";
import AI_BusinessAnalyst_Report from "./components/Pages/Settings/AI_BusinessAnalyst/AI_BusinessAnalyst_Report.tsx";
import RestoreData from "./components/Pages/Settings/DataSync/RestoreData.tsx";
import ImportData from "./components/Pages/Settings/DataSync/ImportData.tsx";
import BackupData from "./components/Pages/Settings/DataSync/BackupData.tsx";
import AddRole from "./components/Pages/Settings/RolePermission/AddRole.tsx";
import ManageRoles from "./components/Pages/Settings/RolePermission/ManageRoles.tsx";
import AssignRole from "./components/Pages/Settings/RolePermission/AssignRole.tsx";


// Pages – change paths/names to match your project
//import Dashboard from "./components/Pages/Dashboard";
//import AddProduct from "./components/Pages/AddProduct";
//import NewPurchase from "./components/Pages/NewPurchase";
// import other pages here...

const App: React.FC = () => {
  return (
    // Whole screen: [ Sidebar | Right side ]
    <div className="flex h-screen overflow-hidden bg-[#f5f5f7]">
      {/* LEFT: sidebar – its own expand/shrink logic */}
      <Sidebar />

      {/* RIGHT: header + content area */}
      <div className="flex flex-1 flex-col">
        {/* Fixed header */}
        
          <Header />
        

        {/* Scrollable content – this is the dashboard area */}
        <main className="flex-1 overflow-y-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/addproduct" element={<AddProduct/>}/>
            <Route path="/newsale" element={<NewSale/>}/>
            <Route path="/salemanagement" element={<SaleManagement/>}/>
            <Route path="/thirdpartypayments" element={<ThirdPartyPayments/>}/>
            <Route path="/newexchange" element={<NewExchange/>}/>
            <Route path="/exchangemanagement" element={<ExchangeManagement/>}/>
            <Route path="/possale" element={<POSSale/>}/>
            <Route path="/addcustomer" element={<AddCustomer/>}/>
            <Route path="/managecustomers" element={<ManageCustomers/>}/>
            <Route path="/addbulkcustomers" element={<AddBulkCustomers/>}/>
            <Route path="/manageproducts" element={<ManageProducts/>}/>
            <Route path="/stocktransfer" element={<StockTransfer/>}/>
            <Route path="/importproducts" element={<ImportProducts/>}/>
            <Route path="/inventorymanagement" element={<InventoryManagement/>}/>
            <Route path="/addnewpurchase" element={<AddNewPurchase/>}/>
            <Route path="/purchasemanagement" element={<PurchaseManagement/>}/>
            <Route path="/purchasetransactions" element={<PurchaseTransactions/>}/>
            <Route path="/addsupplier" element={<AddSupplier/>}/>
            <Route path="/managesuppliers" element={<SuppliersManagement/>}/>
            <Route path="/servicepayment" element={<ServicePayment/>}/>
            <Route path="/manageservicepayment" element={<ManageServicePayment/>}/>
            <Route path="/supplierpayments" element={<SupplierPayment/>}/>
            <Route path="/managesupplierpayments" element={<ManageSuppliersPayment/>}/>
            <Route path="/addnewlead" element={<AddNewLead/>}/>
            <Route path="/managelead" element={<ManageLead/>}/>
            <Route path="/employeeattendance" element={<AddAttendance/>}/>
            <Route path="/manageattendance" element={<ManageAttendance/>}/>
            <Route path="/addnewemployee" element={<AddNewEmployee/>}/>
            <Route path="/manageemployee" element={<ManageEmployee/>}/>
            <Route path="/under-development" element={<UnderDevelopment />} />
            <Route path="/addserviceprovider" element={<AddServiceProvider/>}/>
            <Route path="/manageserviceprovider" element={<ManageServiceProvider/>}/>
            <Route path="/addservice" element={<AddService/>}/>
            <Route path="/manageservice" element={<ManageService/>}/>
            <Route path="/registerservicerequest" element={<RegisterServiceRequest/>}/>
            <Route path="/manageservicerequest" element={<ManageServiceRequest/>}/>
            <Route path="/salesperformance" element={<SalesPerformance/>}/>
            <Route path="/dailysales" element={<DailySales/>}/>
            <Route path="/topbottomsellers" element={<TopBottomSellers/>}/>
            <Route path="/salesbyitems" element={<SalesByItems/>}/>
            <Route path="/salesbycategory" element={<SalesByCategory/>}/>
            <Route path="/marginanalysis" element={<MarginAnalysis/>}/>
            <Route path="/purchasereports" element={<PurchaseReports/>}/>
            <Route path="/customerreports" element={<CustomerReports/>}/>
            <Route path="/suppliertxnreports" element={<SupplierReports/>}/>
            <Route path="/inventorystockreports" element={<InventoryStockReports/>}/>
            <Route path="/hrmreports" element={<HRMReports/>}/>
            <Route path="/servicereports" element={<ServiceReports/>}/>
            <Route path="/summaryreports" element={<SummaryReport/>}/>
            <Route path="/detailedreports" element={<DetailedReport/>}/>
            <Route path="/createticket" element={<CreateTicket/>}/>
            <Route path="/manageticket" element={<ManageTicket/>}/>
            <Route path="/addcategory" element={<AddCategory/>}/>
            <Route path="/addsubcategory" element={<AddSubCategory/>}/>
            <Route path="/addbrand" element={<AddBrand/>}/>
            <Route path="/addwarranty" element={<AddWarranty/>}/>
            <Route path="/addmeasurement" element={<AddMeasurement/>}/>
            <Route path="/addstores" element={<AddStores/>}/>
            <Route path="/addwarehouses" element={<AddWarehouses/>}/>
            <Route path="/addbank" element={<AddBank/>}/>
            <Route path="/managebank" element={<ManageBank/>}/>
            <Route path="/managepaymentmethods" element={<ManagePaymentMethods/>}/>
            <Route path="/addtax" element={<AddTax/>}/>
            <Route path="/managetax" element={<ManageTax/>}/>
            <Route path="/adddiscount" element={<AddDiscount/>}/>
            <Route path="/managediscount" element={<AddDiscount/>}/>
            <Route path="/adddesignation" element={<AddDesignation/>}/>
            <Route path="/managedesignation" element={<AddDesignation/>}/>
            <Route path="/addshift" element={<AddShift/>}/>
            <Route path="/manageshift" element={<AddShift/>}/>
            <Route path="/managecompany" element={<ManageCompany/>}/>
            <Route path="/language" element={<Language/>}/>
            <Route path="/currency" element={<Currency/>}/>
            <Route path="/generalsettings" element={<GeneralSettings/>}/>
            <Route path="/printsettings" element={<PrintSettings/>}/>
            <Route path="/mailsettings" element={<MailSettings/>}/>
            <Route path="/invoicesettings" element={<InvoiceSettings/>}/>
            <Route path="/appsettings" element={<AppSettings/>}/>
            <Route path="/aisettings" element={<AI_Settings/>}/>
            <Route path="/aibusinessanalystreport" element={<AI_BusinessAnalyst_Report/>}/>
            <Route path="/restoredata" element={<RestoreData/>}/>
            <Route path="/importdata" element={<ImportData/>}/>
            <Route path="/backupdata" element={<BackupData/>}/>
            <Route path="/addrole" element={<AddRole/>}/>
            <Route path="/manageroles" element={<ManageRoles/>}/>
            <Route path="/userassignrole" element={<AssignRole/>}/>







            <Route path="*" element={<UnderDevelopment />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
