// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useLanguage } from "./Context/LanguageContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



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

//Hindi  
import H_AddProduct from "./components/Pages/H_AddProduct.tsx";
import H_AddCustomer from "./components/Pages/Customer/H_AddCustomer.tsx";
import H_ManageCustomers from "./components/Pages/Customer/H_ManageCustomers.tsx";
import H_AddBulkCustomers from "./components/Pages/Customer/H_AddBulkCustomers.tsx";
import H_ManageProducts from "./components/Pages/Inventory/H_ManageProducts.tsx";
import H_StockTransfer from "./components/Pages/Inventory/H_StockTransfer.tsx";
import H_ImportProducts from "./components/Pages/Inventory/H_ImportProducts.tsx";
import H_InventoryManagement from "./components/Pages/Inventory/H_InventoryManagement.tsx";
import H_AddNewPurchase from "./components/Pages/Purchase/H_AddNewPurchase.tsx";
import H_PurchaseTransactions from "./components/Pages/Purchase/H_PurchaseTransactions.tsx";
import H_PurchaseManagement from "./components/Pages/Purchase/H_PurchaseManagement.tsx";
import H_AddSupplier from "./components/Pages/Supplier/H_AddSupplier.tsx";
import H_SuppliersManagement from "./components/Pages/Supplier/H_SuppliersManagement.tsx";
import H_SupplierPayment from "./components/Pages/Accounts/H_SupplierPayment.tsx";
import H_ManageSuppliersPayment from "./components/Pages/Accounts/H_ManageSuppliersPayment.tsx";
import H_AddNewLead from "./components/Pages/Leadmanagement/H_AddNewLead.tsx";
import H_ManageLead from "./components/Pages/Leadmanagement/H_ManageLead.tsx";
import H_AddAttendance from "./components/Pages/HumanResource/Attendance/H_AddAttendance.tsx";
import H_ManageAttendance from "./components/Pages/HumanResource/Attendance/H_ManageAttendance.tsx";
import H_AddNewEmployee from "./components/Pages/HumanResource/EmployeeManagement/H_AddNewEmployee.tsx";
import H_ManageEmployee from "./components/Pages/HumanResource/EmployeeManagement/H_ManageEmployee.tsx";
import H_AddServiceProvider from "./components/Pages/Service/H_AddServiceProvider.tsx";
import H_ManageServiceProvider from "./components/Pages/Service/H_ManageServiceProvider.tsx";
import H_AddService from "./components/Pages/Service/H_AddService.tsx";
import H_ManageService from "./components/Pages/Service/H_ManageService.tsx";
import H_RegisterServiceRequest from "./components/Pages/Service/H_RegisterServiceRequest.tsx";
import H_ManageServiceRequest from "./components/Pages/Service/H_ManageServiceRequest.tsx";
import H_ServicePayment from "./components/Pages/Accounts/H_ServicePayment.tsx";
import H_ManageServicePayment from "./components/Pages/Accounts/H_ManageServicePayment.tsx";
import H_SalesPerformance from "./components/Pages/ExploreReports/SalesReports/H_SalesPerformance.tsx";
import H_DailySales from "./components/Pages/ExploreReports/SalesReports/H_DailySales.tsx";
import H_TopBottomSellers from "./components/Pages/ExploreReports/SalesReports/H_TopBottomSellers.tsx";
import H_SalesByItems from "./components/Pages/ExploreReports/SalesReports/H_SalesByItems.tsx";
import H_SalesByCategory from "./components/Pages/ExploreReports/SalesReports/H_SalesByCategory.tsx";
import H_MarginAnalysis from "./components/Pages/ExploreReports/SalesReports/H_MarginAnalysis.tsx";
import H_PurchaseReports from "./components/Pages/ExploreReports/H_PurchaseReports.tsx";
import H_CustomerReports from "./components/Pages/ExploreReports/H_CustomerReports.tsx";
import H_SupplierReports from "./components/Pages/ExploreReports/H_SupplierReports.tsx";
import H_InventoryStockReports from "./components/Pages/ExploreReports/H_InventoryStockReports.tsx";
import H_HRMReports from "./components/Pages/ExploreReports/H_HRMReports.tsx";
import H_ServiceReports from "./components/Pages/ExploreReports/H_ServiceReports.tsx";
import H_SummaryReports from "./components/Pages/ExploreReports/ThirdPartyReports/H_SummaryReports.tsx";
import H_DetailedReports from "./components/Pages/ExploreReports/ThirdPartyReports/H_DetailedReports.tsx";
import H_CreateTicket from "./components/Pages/SupportTicket/H_CreateTicket.tsx";
import H_ManageTicket from "./components/Pages/SupportTicket/H_ManageTicket.tsx";
import H_AddCategory from "./components/Pages/RetailixConfiguration/InventoryMasters/H_AddCategory.tsx";
import H_AddSubCategory from "./components/Pages/RetailixConfiguration/InventoryMasters/H_AddSubCategory.tsx";
import H_AddBrand from "./components/Pages/RetailixConfiguration/InventoryMasters/H_AddBrand.tsx";
import H_AddWarranty from "./components/Pages/RetailixConfiguration/InventoryMasters/H_AddWarranty.tsx";
import H_AddMeasurement from "./components/Pages/RetailixConfiguration/InventoryMasters/H_AddMeasurement.tsx";
import H_AddStores from "./components/Pages/RetailixConfiguration/InventoryMasters/H_AddStores.tsx";
import H_AddWarehouses from "./components/Pages/RetailixConfiguration/InventoryMasters/H_AddWarehouses.tsx";
import H_AddBank from "./components/Pages/RetailixConfiguration/Bank/H_AddBank.tsx";
import H_ManagePaymentMethods from "./components/Pages/RetailixConfiguration/Bank/H_ManagePaymentMethods.tsx";
import H_AddTax from "./components/Pages/RetailixConfiguration/TaxManagement/H_AddTax.tsx";
import H_AddDiscount from "./components/Pages/RetailixConfiguration/DiscountManagement/H_AddDiscount.tsx";
import H_AddDesignation from "./components/Pages/RetailixConfiguration/HumanResource/Designation/H_AddDesignation.tsx";
import H_AddShift from "./components/Pages/RetailixConfiguration/HumanResource/Shift/H_AddShift.tsx";
import H_ManageTax from "./components/Pages/RetailixConfiguration/TaxManagement/H_ManageTax.tsx";
import H_ManageBank from "./components/Pages/RetailixConfiguration/Bank/H_ManageBank.tsx";
import H_ManageCompany from "./components/Pages/Settings/SoftwareSettings/H_ManageCompany.tsx";
import H_Language from "./components/Pages/Settings/SoftwareSettings/H_Language.tsx";
import H_Currency from "./components/Pages/Settings/SoftwareSettings/H_Currency.tsx";
import H_GeneralSettings from "./components/Pages/Settings/SoftwareSettings/H_GeneralSettings.tsx";
import H_PrintSettings from "./components/Pages/Settings/SoftwareSettings/H_PrintSettings.tsx";
import H_MailSettings from "./components/Pages/Settings/SoftwareSettings/H_MailSettings.tsx";
import H_InvoiceSettings from "./components/Pages/Settings/SoftwareSettings/H_InvoiceSettings.tsx";
import H_AppSettings from "./components/Pages/Settings/SoftwareSettings/H_AppSettings.tsx";
import H_AI_Settings from "./components/Pages/Settings/AI_BusinessAnalyst/H_AI_Settings.tsx";
import H_AI_BusinessAnalyst_Report from "./components/Pages/Settings/AI_BusinessAnalyst/H_AI_BusinessAnalyst_Report.tsx";
import H_RestoreData from "./components/Pages/Settings/DataSync/H_RestoreData.tsx";
import H_ImportData from "./components/Pages/Settings/DataSync/H_ImportData.tsx";
import H_BackupData from "./components/Pages/Settings/DataSync/H_BackupData.tsx";
import H_AddRole from "./components/Pages/Settings/RolePermission/H_AddRole.tsx";
import H_ManageRoles from "./components/Pages/Settings/RolePermission/H_ManageRoles.tsx";
import H_AssignRole from "./components/Pages/Settings/RolePermission/H_AssignRole.tsx";
import H_NewSale from "./components/Pages/SalesAndExchange/H_NewSale";
import H_SaleManagement from "./components/Pages/SalesAndExchange/H_SaleManagement";
import H_ThirdPartyPayments from "./components/Pages/SalesAndExchange/H_ThirdPartyPayments";
import H_NewExchange from "./components/Pages/SalesAndExchange/H_NewExchange";
import H_ExchangeManagement from "./components/Pages/SalesAndExchange/H_ExchangeManagement";
import H_POSSale from "./components/Pages/SalesAndExchange/H_POSSale.tsx";

// Pages – change paths/names to match your project
//import Dashboard from "./components/Pages/Dashboard";
//import AddProduct from "./components/Pages/AddProduct";
//import NewPurchase from "./components/Pages/NewPurchase";
// import other pages here...

const App: React.FC = () => {

  const{language}=useLanguage();
  const navigate=useNavigate();

  useEffect(()=>{
    navigate("/dashboard");
  }, [language]);

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
            { language==="en" && (
            <>
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
            </>)} 
            
            
            { language==="hi" && (
            <>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/addproduct" element={<H_AddProduct/>}/>
            <Route path="/newsale" element={<H_NewSale/>}/>
            <Route path="/salemanagement" element={<H_SaleManagement/>}/>
            <Route path="/thirdpartypayments" element={<H_ThirdPartyPayments/>}/>
            <Route path="/newexchange" element={<H_NewExchange/>}/>
            <Route path="/exchangemanagement" element={<H_ExchangeManagement/>}/>
            <Route path="/possale" element={<H_POSSale/>}/>
            <Route path="/addcustomer" element={<H_AddCustomer/>}/>
            <Route path="/managecustomers" element={<H_ManageCustomers/>}/>
            <Route path="/addbulkcustomers" element={<H_AddBulkCustomers/>}/>
            <Route path="/manageproducts" element={<H_ManageProducts/>}/>
            <Route path="/stocktransfer" element={<H_StockTransfer/>}/>
            <Route path="/importproducts" element={<H_ImportProducts/>}/>
            <Route path="/inventorymanagement" element={<H_InventoryManagement/>}/>
            <Route path="/addnewpurchase" element={<H_AddNewPurchase/>}/>
            <Route path="/purchasemanagement" element={<H_PurchaseManagement/>}/>
            <Route path="/purchasetransactions" element={<H_PurchaseTransactions/>}/>
            <Route path="/addsupplier" element={<H_AddSupplier/>}/>
            <Route path="/managesuppliers" element={<H_SuppliersManagement/>}/>
            <Route path="/servicepayment" element={<H_ServicePayment/>}/>
            <Route path="/manageservicepayment" element={<H_ManageServicePayment/>}/>
            <Route path="/supplierpayments" element={<H_SupplierPayment/>}/>
            <Route path="/managesupplierpayments" element={<H_ManageSuppliersPayment/>}/>
            <Route path="/addnewlead" element={<H_AddNewLead/>}/>
            <Route path="/managelead" element={<H_ManageLead/>}/>
            <Route path="/employeeattendance" element={<H_AddAttendance/>}/>
            <Route path="/manageattendance" element={<H_ManageAttendance/>}/>
            <Route path="/addnewemployee" element={<H_AddNewEmployee/>}/>
            <Route path="/manageemployee" element={<H_ManageEmployee/>}/>
            <Route path="/under-development" element={<UnderDevelopment />} />
            <Route path="/addserviceprovider" element={<H_AddServiceProvider/>}/>
            <Route path="/manageserviceprovider" element={<H_ManageServiceProvider/>}/>
            <Route path="/addservice" element={<H_AddService/>}/>
            <Route path="/manageservice" element={<H_ManageService/>}/>
            <Route path="/registerservicerequest" element={<H_RegisterServiceRequest/>}/>
            <Route path="/manageservicerequest" element={<H_ManageServiceRequest/>}/>
            <Route path="/salesperformance" element={<H_SalesPerformance/>}/>
            <Route path="/dailysales" element={<H_DailySales/>}/>
            <Route path="/topbottomsellers" element={<H_TopBottomSellers/>}/>
            <Route path="/salesbyitems" element={<H_SalesByItems/>}/>
            <Route path="/salesbycategory" element={<H_SalesByCategory/>}/>
            <Route path="/marginanalysis" element={<H_MarginAnalysis/>}/>
            <Route path="/purchasereports" element={<H_PurchaseReports/>}/>
            <Route path="/customerreports" element={<H_CustomerReports/>}/>
            <Route path="/suppliertxnreports" element={<H_SupplierReports/>}/>
            <Route path="/inventorystockreports" element={<H_InventoryStockReports/>}/>
            <Route path="/hrmreports" element={<H_HRMReports/>}/>
            <Route path="/servicereports" element={<H_ServiceReports/>}/>
            <Route path="/summaryreports" element={<H_SummaryReports/>}/>
            <Route path="/detailedreports" element={<H_DetailedReports/>}/>
            <Route path="/createticket" element={<H_CreateTicket/>}/>
            <Route path="/manageticket" element={<H_ManageTicket/>}/>
            <Route path="/addcategory" element={<H_AddCategory/>}/>
            <Route path="/addsubcategory" element={<H_AddSubCategory/>}/>
            <Route path="/addbrand" element={<H_AddBrand/>}/>
            <Route path="/addwarranty" element={<H_AddWarranty/>}/>
            <Route path="/addmeasurement" element={<H_AddMeasurement/>}/>
            <Route path="/addstores" element={<H_AddStores/>}/>
            <Route path="/addwarehouses" element={<H_AddWarehouses/>}/>
            <Route path="/addbank" element={<H_AddBank/>}/>
            <Route path="/managebank" element={<H_ManageBank/>}/>
            <Route path="/managepaymentmethods" element={<H_ManagePaymentMethods/>}/>
            <Route path="/addtax" element={<H_AddTax/>}/>
            <Route path="/managetax" element={<H_ManageTax/>}/>
            <Route path="/adddiscount" element={<H_AddDiscount/>}/>
            <Route path="/managediscount" element={<H_AddDiscount/>}/>
            <Route path="/adddesignation" element={<H_AddDesignation/>}/>
            <Route path="/managedesignation" element={<H_AddDesignation/>}/>
            <Route path="/addshift" element={<H_AddShift/>}/>
            <Route path="/manageshift" element={<H_AddShift/>}/>
            <Route path="/managecompany" element={<H_ManageCompany/>}/>
            <Route path="/language" element={<H_Language/>}/>
            <Route path="/currency" element={<H_Currency/>}/>
            <Route path="/generalsettings" element={<H_GeneralSettings/>}/>
            <Route path="/printsettings" element={<H_PrintSettings/>}/>
            <Route path="/mailsettings" element={<H_MailSettings/>}/>
            <Route path="/invoicesettings" element={<H_InvoiceSettings/>}/>
            <Route path="/appsettings" element={<H_AppSettings/>}/>
            <Route path="/aisettings" element={<H_AI_Settings/>}/>
            <Route path="/aibusinessanalystreport" element={<H_AI_BusinessAnalyst_Report/>}/>
            <Route path="/restoredata" element={<H_RestoreData/>}/>
            <Route path="/importdata" element={<H_ImportData/>}/>
            <Route path="/backupdata" element={<H_BackupData/>}/>
            <Route path="/addrole" element={<H_AddRole/>}/>
            <Route path="/manageroles" element={<H_ManageRoles/>}/>
            <Route path="/userassignrole" element={<H_AssignRole/>}/>
            </>)}







            <Route path="*" element={<UnderDevelopment />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
