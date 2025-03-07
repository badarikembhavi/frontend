export type FontFamily =
  | `Inter var`
  | `'Inter', sans-serif`
  | `'Poppins', sans-serif`
  | `'Roboto', sans-serif`
  | `'Public Sans', sans-serif`;
export type PresetColor = 'default' | 'theme1' | 'theme2' | 'theme3' | 'theme4' | 'theme5' | 'theme6' | 'theme7' | 'theme8';
export type I18n = 'en' | 'fr' | 'ro' | 'zh'; // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
  AUTO = 'auto'
}

export enum EntityUserTypes {
  STAKEHOLDER = 'STAKEHOLDER',
  CONTACT = 'CONTACT'
}

export enum MenuOrientation {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal'
}

export enum ThemeDirection {
  LTR = 'ltr',
  RTL = 'rtl'
}

export enum EntityTypes {
  ORGANIZATION = 'ORGANIZATION',
  BRAND = 'BRAND',
  BRANCH = 'BRANCH',
  MASTER_DSA = 'MASTER_DSA',
  DSA = 'DSA'
}

export enum EntityProfileType {
  INDIVIDUAL = 'INDIVIDUAL',
  COMPANY = 'COMPANY'
}
export enum EntityCompanyType {
  NONE = 'NONE',
  LLP = 'LLP',
  PARTNERSHIP = 'PARTNERSHIP',
  PVT_LTD = 'PVT_LTD',
  PROPRIETORSHIP = 'PROPRIETORSHIP'
}

export enum EntityStatus {
  TBD = 'TBD',
  DRAFT = 'DRAFT',
  COMPLETE = 'COMPLETE',
  ESIGN_INPROGRESS = 'ESIGN_INPROGRESS',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

export enum WalletTransactionEvent {
  ONBOARDING = 'ONBOARDING',
  TOPUP = 'TOPUP',
  REVALUATION = 'REVALUATION',
  NONE = 'NONE'
}

export enum DimensionUnit {
  MILIMETER = 'mm',
  CENTIMETER = 'cm',
  METERE = 'm',
  INCH = 'in'
}

export enum WeightUnit {
  MILIGRAM = 'mg',
  GRAM = 'g'
}
export enum FieldTypes {
  TEXT = 'text',
  NUMBER = 'number',
  SELECT = 'select',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  FORM_GROUP = 'form_group',
  FORM_ARRAY = 'form_array'
}

export enum DocumentTypes {
  PASSPORT = 'passport',
  AADHAAR = 'aadhaar',
  VOTERID = 'voterid',
  PAN = 'pan',
  COI = 'coi',
  ELECTRICITY_BILL = 'electricity_bill',
  BANK_STATEMENT = 'bank_statement',
  MCA_DATA = 'mca_data',
  GRADUATION_CERTIFICATE = 'graduation_certificate',
  POST_GRADUATION_CERTIFICATE = 'post_graduation_certificate',
  PASSPORT_SIZE_PHOTO = 'passport_size_photo',
  LIST_OF_SHAREHOLDERS_AND_DIRECTORS = 'list_of_shareholders_and_directors',
  CA_CERTIFIED_NETWORTH_CERTIFICATE = 'ca_certified_networth_certificate',
  SHOP_AND_ESTABLISHMENT = 'shop_and_establishment',
  GST_CERTIFICATE = 'gst_certificate',
  MSME_CERTIFICATE = 'msme_certificate',
  OTHER_CERTIFICATE = 'other_certificate',
  BUSINESS_COI_CERTIFICATE = 'business_coi_certificate',
  MEMORANDUM_OF_ASSOCIATION = 'memorandum_of_association',
  ARTICLES_OF_ASSOCIATION = 'articles_of_association',
  PARTNERSHIP_LEAD = 'partnership_lead',
  LATEST_CV = 'latest_cv',
  LATEST_BUSINESS_PROFILE = 'latest_business_profile',
  LATEST_BUSINESS_PROFILE_WITH_PAST_BUSINESS_DETAILS = 'latest_business_profile_with_past_business_details',
  WORK_EXPERIANCE_IN_FINANCIAL_SECTOR = 'work_experiance_in_financial_sector',
  FINANCIAL_EDUCATION_CERTIFICATE = 'financial_education_certificate',
  PNL_BALANCE_SHEET = 'Past 3 years Certified P&L Statement and Balance Sheet',
  YEAR_TO_DATE_FINANCIALS = 'Year to date financials',
  UPDATED_CIBIL_REPORTS = 'Updated CIBIL Reports',
  SOURCE_OF_FUNDING = 'Source of Funding',
  PAST_3_YEAR_ITR = 'Past 3 Year ITR',
  FINANCIAL_POSITION_OF_OWNER = 'Financial Position of Owner/Proprietor/Partners etc',
  PAST_3_YEAR_ITR_OF_OWNER = 'Past 3 Year ITR of Owners, if available',
  BUSINESS_ACTIVITY_AND_INTERNAL_CONTROL_PROCESS = 'Current Business Activity & Internal Control Process',
  PRE_EXISTING_DSA_ASSIGNMENTS = 'Pre-existing DSA Assignments, if any',
  PREVIOUS_ASSIGNMENT_STAFFS = ' No of Staff working on previous assignments',
  CURRENT_STAFF_CAPACITY = 'Current Staff Capacity',
  PROPOSED_INCREASED = 'Proposed increase, if required',
  DETAILS_OF_NON_COMPLIANCES = 'Details of Non-Compliances under repective Acts, if any',
  PENDING_LITIGATIONS = 'Pending Litigations, if any',
  DETAILED_LOAN_DISTRIBUTION_PRACTICE = 'Detailed Loan Distribution Practice',
  TRAINING_SCHEDULE = 'Training Schedule, if any',
  CASES_OF_INAPPROPRIATE_PAST_BEHAVIOUR = 'Cases of Inappropriate Past Behaviour, if any',
  DETAILS_OF_FRAUDS = 'Details of Frauds, if any',
  COMPUTER_AND_SOFTWARES_IN_USE = 'Computer and Softwares Systems in Use',
  IT_POLICIES_ADOPTED = 'IT Policies Adopted',
  IT_AND_INTERNAL_CONTROL_AUDIT_PERIOD = 'IT and Internal Control Audit Period, if any',
  BUSINESS_CONTINUITY_PLAN = 'Business Continuity Plan, if any',
  IT_UPDATE_PROCESS = 'IT Update Process, if any',
  DATA_PROTECTION = 'Data Protection Practices',
  GRIEVANCE_REDRESSAL_MECHANISM_AND_ESCALATION_MATRIX = 'Grievance Redressal Mechanism & Escalation Matrix',
  SALARY_SLIP_1 = 'Salary_slip_1',
  SALARY_SLIP_2 = 'Salary_slip_2',
  SALARY_SLIP_3 = 'Salary_slip_3',
  FORM16 = 'Form16',
  ITR_1 = 'ITR_1',
  ITR_2 = 'ITR_2',
  BUSINESS_REG = 'Business_reg'
}

export enum VerificationServices {
  GSTIN = 'gstin',
  PAN = 'pan',
  BANK = 'bank',
  PAN_BUSINESS = 'pan_business',
  AADHAAR = 'aadhaar',
  VAULT = 'vault',
  AREA = 'area',
  FIELD = 'field',
  POLICE = 'police',
  CREDIT_REPORT = 'credit_report',
  AADHAAR_EXTRACTION = 'aadhaar_extraction',
  PAN_EXTRACTION = 'pan_extraction',
  UPI = "upi",
  PAN_EXTENSIVE = 'pan_extensive',
  SALARY_SLIP = 'salarySlip',
  BANK_STATEMENT = 'bsa'
}
export enum YesNo {
  YES = 'Y',
  NO = 'N'
}

export enum InstallmentType {
  BULLET = 'BULLET',
  EMI = 'EMI'
}

export enum TenureType {
  DAY = 'DAY',
  MONTH = 'MONTH'
}

export enum FeeType {
  FLAT = 'FLAT',
  PERCENTAGE = 'PERCENTAGE'
}

export enum RoiType {
  FLAT = 'FLAT',
  REDUCING = 'REDUCING'
}

export enum DisburseTo {
  CUSTOMER = 'CUSTOMER',
  THIRD_PARTY = 'THIRD_PARTY'
}

export enum NatureOfLoan {
  HYBRID = 'HYBRID',
  ISV = 'ISV',
  DIRECT = 'DIRECT'
}

export enum SchemeStatus {
  REJECTED = 'REJECTED',
  REVIEW = 'REVIEW',
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

export enum PermissionModules {
  DASHBOARD = 'DASHBOARD',
  LOAN_APPLICATION = 'LOAN_APPLICATION',
  PRODUCT = 'PRODUCT',
  SCHEME = 'SCHEME',
  RBAC = 'RBAC',
  RBAC_MODULES = 'RBAC_MODULES',
  RBAC_OPERATIONS = 'RBAC_OPERATIONS',
  RBAC_PERMISSIONS = 'RBAC_PERMISSIONS',
  FORMS = 'FORMS',
  PROFILE = 'PROFILE',
  ORGANIZATION = 'ORGANIZATION',
  BRAND = 'BRAND',
  BRANCH = 'BRANCH',
  MASTER_DSA = 'MASTER_DSA',
  DSA = 'DSA',
  CUSTOMER = 'CUSTOMER',
  PROFILE_VERIFICATION = 'PROFILE_VERIFICATION',
  ENTITY_VERIFICATION = 'ENTITY_VERIFICATION',
  APPROVAL = 'APPROVAL',
  CONFIGURATION = 'CONFIGURATION',
  USERS = 'USERS',
  ENTITY_PREVIEW = 'ENTITY_PREVIEW',
  ENTITY_CREDIT_POLICY = 'ENTITY_CREDIT_POLICY',
  ENTITY_TNC = 'ENTITY_TNC',
  ENTITY_STAKE_HOLDERS = 'ENTITY_STAKE_HOLDERS',
  ENTITY_OTHER_DETAILS = 'ENTITY_OTHER_DETAILS',
  ENTITY_BANK_INFO = 'ENTITY_BANK_INFO',
  ENTITY_ADDRESS_INFO = 'ENTITY_ADDRESS_INFO',
  ENTITY_CONTACT = 'ENTITY_CONTACT',
  ENTITY_BASIC_INFO = 'ENTITY_BASIC_INFO',
  ENTITY_DOCUMENT_VERIFICATION = 'ENTITY_DOCUMENT_VERIFICATION',
  APPLICATION_PREVIEW = 'APPLICATION_PREVIEW',
  APPLICATION_NOMINEE_DETAILS = 'APPLICATION_NOMINEE_DETAILS',
  APPLICATION_LOAN_VALUATION = 'APPLICATION_LOAN_VALUATION',
  APPLICATION_ASSET_VALUATION = 'APPLICATION_ASSET_VALUATION',
  APPLICATION_BASIC_INFO = 'APPLICATION_BASIC_INFO',
  REPORTS = 'REPORTS'
}

export enum PermissionOperations {
  READ = 'READ',
  WRITE = 'WRITE',
  DELETE = 'DELETE',
  EXPORT = 'EXPORT',
  UPDATE = 'UPDATE',
  IMPORT = 'IMPORT'
}

export enum UserGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER'
}

export enum MaritalStatus {
  SINGLE = 'SINGLE',
  MARRIED = 'MARRIED',
  DIVORCED = 'DIVORCED'
}

export enum PaymentMode {
  CASH = 'CASH',
  NEFT = 'NEFT',
  IMPS = 'IMPS',
  UPI = 'UPI',
  NONE = 'NONE'
}

export enum LoanApplicationStatus {
  TBD = 'TBD',
  INITIATED = 'INITIATED',
  INPROGRESS = 'INPROGRESS',
  COMPLETED = 'COMPLETED',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  ONHOLD = 'ONHOLD',
  ESIGN_INITIATED = 'ESIGN_INITIATED',
  ESIGNED = 'ESIGNED',
  DISBURSE_INITIATED = 'DISBURSE_INITIATED',
  DISBURSED = 'DISBURSED'
}
export enum ProfileStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

export enum PoliceVerificationStatus {
  REQUESTED = 'REQUESTED',
  COMPLETE = 'COMPLETE'
}

export enum DisbursalType {
  SHORT = 'SHORT',
  FULL = 'FULL'
}

export enum AdvanceEmiType {
  DOWN_PAYMENT = 'DOWN_PAYMENT',
  INSTALMENTS = 'INSTALMENTS'
}
export enum PaymentStatus {
  TBD = 'TBD',
  PENDING = 'PENDING',
  PAID = 'PAID',
  FAILED = 'FAILED',
  PARTLY_PAID = 'PARTLY_PAID',
  FULLY_PAID = 'FULLY_PAID',
  INITIATED = 'INITIATED'
}
export enum ReportType {
  ACTIVE_LOAN = 'active-loans',
  DSA_SUMMARY = 'dsa-wise-summary',
  DISBURSEMENT_REPORT = 'disbursement-report',
  CASH_DISBURSAL_REPORT = 'cash-disbursal-report'
}
export enum RoleType {
  CUSTODIAN = 'CUSTODIAN',
  COLLECTION_AGENT = 'COLLECTION_AGENT',
  GENERAL = 'CUSTOM'
}
export enum PurposeOfLoan{
  VACATION = 'VACATION',
  PILIGRIMAGE = 'PILIGRIMAGE',
  GENERAL = 'CUSTOM'
}
export enum EmploymemntTypes{
  SALARIED = 'SALARIED',
  SELF_EMPLOYED = 'SELFEMPLOYED',
  BUSINESS = 'BUSINESS'
}
export enum SalariedEmploymentTypes{
  FULLTIME = 'FULLTIME',
  PARTTIME = 'PARTTIME',
  CONTRACTBASED = 'CONTRACTBASED',
  COMMISSONBASED = 'COMMISSONBASED',
  PROBATIONARY = 'PROBATIONARY',
  REMOTE = 'REMOTE',
  FIXEDTERM = 'FIXEDTERM',
  APPRENTICESHIPS = 'APPRENTICESHIPS',
  EXEMPT = 'EXEMPT',
  NONEXEMPT = 'NONEXEMPT'
}



// ==============================|| TYPES - CONFIG ||============================== //

export type CustomizationActionProps = {
  type: string;
  payload?: CustomizationProps;
};

export type DefaultConfigProps = {
  /**
   * The props used for the theme font-style.
   * We provide static below options -
   * `'Inter', sans-serif`
   * `'Poppins', sans-serif`
   * `'Roboto', sans-serif`
   * `'Public Sans', sans-serif` (default)
   */
  fontFamily: FontFamily;

  /**
   * The props used for display menu-items with multi-language.
   * We provide static below languages according to 'react-intl' options - https://www.npmjs.com/package/react-intl
   * 'en' (default)
   * 'fr'
   * 'ro'
   * 'zh'
   */
  i18n: I18n;

  /**
   * the props used for menu orientation (diffrent theme layout).
   * we provide static below options -
   * 'vertical' (default)
   * 'horizontal'
   */
  menuOrientation: MenuOrientation;

  /**
   * the props used for show/hide caption drawer
   * default - true
   * false - will hide menu caption
   */
  menuCaption: boolean;

  /**
   * the props used for show mini variant drawer
   * the mini variant is recommended for apps sections that need quick selection access alongside content.
   * default - false
   */
  miniDrawer: boolean;

  /**
   * the props used for theme container.
   * the container centers your content horizontally. It's the most basic layout element.
   * default - true which show container
   * false - will show fluid
   */
  container: boolean;

  /**
   * the props used for default theme palette mode
   * explore the default theme
   * below theme options -
   * 'light' (default)
   * 'dark'
   */
  mode: ThemeMode;

  /**
   * the props used for theme primary color variants
   * we provide static below options thoe s are already defaine in src/themes/theme -
   * 'default'
   * 'theme1'
   * 'theme2'
   * 'theme3'
   * 'theme4'
   * 'theme5'
   * 'theme6'
   * 'theme7'
   * 'theme8'
   */
  presetColor: PresetColor;

  /**
   * the props used for default theme direction
   * explore the default theme
   * below theme options -
   * 'ltr' (default)
   * 'rtl'
   */
  themeDirection: ThemeDirection;

  /**
   * the props used for theme contrast.
   * set box-shadow .
   * default - false which show card without box-shadow and background default
   * true - will show card with box-shadow and background pure white
   */
  themeContrast: boolean;
};

export type CustomizationProps = {
  fontFamily: FontFamily;
  i18n: I18n;
  miniDrawer: boolean;
  container: boolean;
  menuOrientation: MenuOrientation;
  menuCaption: boolean;
  mode: ThemeMode;
  presetColor: PresetColor;
  themeDirection: ThemeDirection;
  themeContrast: boolean;
  onChangeContainer: VoidFunction;
  onChangeLocalization: (lang: I18n) => void;
  onChangeMode: (mode: ThemeMode) => void;
  onChangePresetColor: (theme: PresetColor) => void;
  onChangeDirection: (direction: ThemeDirection) => void;
  onChangeMiniDrawer: (miniDrawer: boolean) => void;
  onChangeMenuOrientation: (menuOrientation: MenuOrientation) => void;
  onChangeMenuCaption: VoidFunction;
  onChangeFontFamily: (fontFamily: FontFamily) => void;
  onChangeContrast: VoidFunction;
};
