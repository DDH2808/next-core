/** Generate by swagger-axios-codegen */
import { type AxiosInstance, type AxiosRequestConfig } from 'axios';

export interface IRequestOptions extends AxiosRequestConfig {
  /**
   * show loading status
   */
  loading?: boolean;
  /**
   * display error message
   */
  showError?: boolean;
  /**
   * indicates whether Authorization credentials are required for the request
   * @default true
   */
  withAuthorization?: boolean;
}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
  /** only in axios interceptor config*/
  loading: boolean;
  showError: boolean;
}

// Add default options
export const serviceOptions: ServiceOptions = {
  loading: false,
  showError: false,
};

export function getConfigs(
  method: string,
  contentType: string,
  url: string,
  options: any,
): IRequestConfig {
  const configs: IRequestConfig = {
    loading: serviceOptions.loading,
    showError: serviceOptions.showError,
    ...options,
    method,
    url,
  };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType,
  };
  return configs;
}

export const basePath = '';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

// customer definition
// empty

/** CampaignStatusRequest */
export interface CampaignStatusRequest {
  status: EnumCampaignStatusRequestStatus;
}

/** AddPackageData */
export interface AddPackageData {
  amount?: number;
}

/** AddUpointData */
export interface AddUpointData {
  amount: number;
}

/** CampaignAction */
export interface CampaignAction {
  type?: EnumCampaignActionType;
  topupData?: TopupData;
  telecomResourceData?: TelecomResourceData;
  addUpointData?: AddUpointData;
  addPackageData?: AddPackageData;
  notificationSmsData?: NotificationSmsData;
  notificationMailData?: NotificationMailData;
  registerCrbtData?: RegisterCrbtData;
  registerNochargeNorenewPackageData?: RegisterNochargeNorenewPackageData;
  registerNormalFlowPackageData?: RegisterNormalFlowPackageData;
  condition?: ConditionSet;
}

/** CampaignActionChains */
export interface CampaignActionChains {
  actions?: CampaignAction[];
}

/** CampaignDto */
export interface CampaignDto {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
  segment?: SegmentDto;
  name?: string;
  eventDescription?: string;
  campaignGroup?: CampaignGroupDto;
  eventName?: string;
  type?: EnumCampaignDtoType;
  groupId?: string;
  status?: EnumCampaignDtoStatus;
  when?: LaunchTimeDto;
  actionChains?: CampaignActionChains[];
  defaultLanguage?: EnumCampaignDtoDefaultLanguage;
  segmentConfigType?: EnumCampaignDtoSegmentConfigType;
  cost?: number;
  maxCost?: number;
  expectedCost?: number;
  params?: object;
  crmService?: ServiceDto;
}

/** CampaignGroupDto */
export interface CampaignGroupDto {
  id?: string;
  spCode?: string;
  spName?: string;
  serviceName?: string;
  packageCode?: string;
  status?: EnumCampaignGroupDtoStatus;
}

/** CampaignParam */
export interface CampaignParam {
  dataType: EnumCampaignParamDataType;
  value: object;
}

/** ConditionClause */
export interface ConditionClause {
  parameter?: string;
  operator?: EnumConditionClauseOperator;
  value?: string;
  opWithPrev?: EnumConditionClauseOpWithPrev;
}

/** ConditionSet */
export interface ConditionSet {
  clauses?: ConditionClause[];
}

/** LaunchSchedule */
export interface LaunchSchedule {
  type?: EnumLaunchScheduleType;
  daysOfWeek?: EnumLaunchScheduleDaysOfWeek[];
  time?: string;
  every?: number;
  iteration?: number;
  dayOfMonth?: number;
  dayOfWeekPerMonth?: EnumLaunchScheduleDayOfWeekPerMonth;
  dayOrder?: EnumLaunchScheduleDayOrder;
}

/** LaunchTimeDto */
export interface LaunchTimeDto {
  type?: EnumLaunchTimeDtoType;
  startDate?: Date;
  endDate?: Date;
  schedule?: LaunchSchedule[];
}

/** MetaData */
export interface MetaData {
  totalPages?: number;
  currentPage?: number;
  pageSize?: string;
  totalItems?: string;
}

/** NotificationMailData */
export interface NotificationMailData {
  title: string;
  content: string;
  template?: string;
}

/** NotificationSmsData */
export interface NotificationSmsData {
  content: string;
  template?: string;
}

/** Either provide a literal value (value) or a reference alias (ref). */
export interface ObjectOrRefLong {
  value?: string;
  ref?: string;
}

/** Either provide a literal value (value) or a reference alias (ref). */
export interface ObjectOrRefString {
  value?: string;
  ref?: string;
}

/** QueryCondition */
export interface QueryCondition {
  attribute?: string;
  operator?: EnumQueryConditionOperator;
  value?: string;
  relation?: EnumQueryConditionRelation;
  isNull?: boolean;
}

/** RegisterCrbtData */
export interface RegisterCrbtData {
  tradeMark: ObjectOrRefString;
}

/** RegisterNochargeNorenewPackageData */
export interface RegisterNochargeNorenewPackageData {
  period: ObjectOrRefString;
}

/** RegisterNormalFlowPackageData */
export interface RegisterNormalFlowPackageData {
  subServiceCode: ObjectOrRefString;
  period: ObjectOrRefString;
}

/** ResponseDtoCampaignDto */
export interface ResponseDtoCampaignDto {
  success?: boolean;
  message?: string;
  data?: CampaignDto;
  statusCode?: string;
  metaData?: MetaData;
}

/** SegmentDto */
export interface SegmentDto {
  campaigns?: CampaignDto[];
  description?: string;
  type?: EnumSegmentDtoType;
  name?: string;
  users?: UserInfoModel[];
  id?: string;
  createdAt?: Date;
  data?: QueryCondition[];
  updatedAt?: Date;
  createdBy?: string;
  nameOfFile?: string;
  updatedBy?: string;
  totalUser?: number;
}

/** ServiceDto */
export interface ServiceDto {
  id?: string;
  serviceName?: string;
  packageCode?: string;
}

/** TelecomResourceData */
export interface TelecomResourceData {
  amount: ObjectOrRefLong;
  durationUnit?: EnumTelecomResourceDataDurationUnit;
  duration?: number;
}

/** TopupData */
export interface TopupData {
  amount: ObjectOrRefLong;
}

/** UserInfoModel */
export interface UserInfoModel {
  id?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  primaryEmail?: string;
  status?: number;
  params?: object;
  msisdn?: string;
}

/** TokenCrmRequest */
export interface TokenCrmRequest {
  token: string;
}

/** ResponseDtoObject */
export interface ResponseDtoObject {
  success?: boolean;
  message?: string;
  data?: object;
  statusCode?: string;
  metaData?: MetaData;
}

/** PackageDto */
export interface PackageDto {}

/** ResponseDtoPackageDto */
export interface ResponseDtoPackageDto {
  success?: boolean;
  message?: string;
  data?: PackageDto;
  statusCode?: string;
  metaData?: MetaData;
}

/** CreateSegmentRequest */
export interface CreateSegmentRequest {
  id?: string;
  type: EnumCreateSegmentRequestType;
  description?: string;
  nameOfFile?: string;
  name?: string;
  data?: DataSegmentRequest[];
  users?: UserEventRequest[];
}

/** DataSegmentRequest */
export interface DataSegmentRequest {
  attribute: string;
  operator: EnumDataSegmentRequestOperator;
  value?: string;
  relation?: EnumDataSegmentRequestRelation;
  isNull?: boolean;
}

/** UserEventRequest */
export interface UserEventRequest {
  msisdn: string;
  params?: object;
}

/** ResponseDtoSegmentDto */
export interface ResponseDtoSegmentDto {
  success?: boolean;
  message?: string;
  data?: SegmentDto;
  statusCode?: string;
  metaData?: MetaData;
}

/** CreatePriceQuoteRequest */
export interface CreatePriceQuoteRequest {
  status: EnumCreatePriceQuoteRequestStatus;
  topUp: PriceModelRequest;
  addMoney: PriceModelRequest;
  addPromotion: PriceModelRequest;
  addData: PriceModelRequest;
  addSMS: PriceModelRequest;
  addCallMinutes: PriceModelRequest;
  notificationSMS: PriceModelRequest;
  notificationMail: PriceModelRequest;
  addPackage: PriceModelRequest;
  registerCRBT?: PriceModelRequest;
  registerNoChargeNoRenewLaoTV?: PriceModelRequest;
}

/** PriceModelRequest */
export interface PriceModelRequest {
  unitPrice: number;
  timePrice?: number;
  isTimePricePercentage?: boolean;
}

/** PriceModel */
export interface PriceModel {
  unitPrice?: number;
  timePrice?: number;
  isTimePricePercentage?: boolean;
}

/** PriceQuoteDto */
export interface PriceQuoteDto {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
  status?: EnumPriceQuoteDtoStatus;
  topUp?: PriceModel;
  addMoney?: PriceModel;
  addPromotion?: PriceModel;
  addData?: PriceModel;
  addSMS?: PriceModel;
  addCallMinutes?: PriceModel;
  notificationSMS?: PriceModel;
  notificationMail?: PriceModel;
  addPackage?: PriceModel;
  registerCRBT?: PriceModel;
  registerNoChargeNoRenewLaoTV?: PriceModel;
}

/** ResponseDtoPriceQuoteDto */
export interface ResponseDtoPriceQuoteDto {
  success?: boolean;
  message?: string;
  data?: PriceQuoteDto;
  statusCode?: string;
  metaData?: MetaData;
}

/** CronJobResponse */
export interface CronJobResponse {
  totalTimeScheduleGenerate?: number;
  totalJobGenerate?: number;
}

/** ResponseDtoCronJobResponse */
export interface ResponseDtoCronJobResponse {
  success?: boolean;
  message?: string;
  data?: CronJobResponse;
  statusCode?: string;
  metaData?: MetaData;
}

/** CreateCrmServiceRequest */
export interface CreateCrmServiceRequest {
  spCode: string;
  spName?: string;
  serviceName?: string;
  packageCode?: string;
  status?: EnumCreateCrmServiceRequestStatus;
}

/** CrmPackageModel */
export interface CrmPackageModel {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
  subserviceCode?: string;
  packageName?: string;
  packageCode?: string;
  packageType?: string;
  packagePeriod?: EnumCrmPackageModelPackagePeriod;
  packageStatus?: EnumCrmPackageModelPackageStatus;
}

/** CrmServiceModel */
export interface CrmServiceModel {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
  spCode?: string;
  spName?: string;
  serviceName?: string;
  packageCode?: string;
  status?: EnumCrmServiceModelStatus;
  secretKey?: string;
  subServices?: CrmSubServiceModel[];
}

/** CrmSubServiceModel */
export interface CrmSubServiceModel {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
  serviceCode?: string;
  subserviceCode?: string;
  subserviceName?: string;
  subserviceStatus?: EnumCrmSubServiceModelSubserviceStatus;
  packages?: CrmPackageModel[];
}

/** ResponseDtoCrmServiceModel */
export interface ResponseDtoCrmServiceModel {
  success?: boolean;
  message?: string;
  data?: CrmServiceModel;
  statusCode?: string;
  metaData?: MetaData;
}

/** CampaignActionChainsRequest */
export interface CampaignActionChainsRequest {
  actions?: CampaignActionRequest[];
}

/** CampaignActionRequest */
export interface CampaignActionRequest {
  type: EnumCampaignActionRequestType;
  topupData?: TopupData;
  telecomResourceData?: TelecomResourceData;
  addUpointData?: AddUpointData;
  deductUpointData?: DeductUpointData;
  addPackageData?: AddPackageData;
  notificationSmsData?: NotificationSmsData;
  notificationMailData?: NotificationMailData;
  registerCrbtData?: RegisterCrbtData;
  registerNochargeNorenewPackageData?: RegisterNochargeNorenewPackageData;
  registerNormalFlowPackageData?: RegisterNormalFlowPackageData;
  condition?: ConditionSet;
}

/** CreateCampaignRequest */
export interface CreateCampaignRequest {
  name?: string;
  type: EnumCreateCampaignRequestType;
  segment?: CreateSegmentRequest;
  groupId: string;
  status?: EnumCreateCampaignRequestStatus;
  when: LaunchTimeRequest;
  actionChains: CampaignActionChainsRequest[];
  eventName?: string;
  eventDescription?: string;
  maxCost?: number;
  defaultLanguage?: EnumCreateCampaignRequestDefaultLanguage;
  serviceCode?: string;
  params?: object;
}

/** DeductUpointData */
export interface DeductUpointData {
  amount: number;
}

/** LaunchTimeRequest */
export interface LaunchTimeRequest {
  type: EnumLaunchTimeRequestType;
  startDate?: Date;
  endDate?: Date;
  schedule?: ScheduleCampaignRequest[];
}

/** ScheduleCampaignRequest */
export interface ScheduleCampaignRequest {
  type: EnumScheduleCampaignRequestType;
  daysOfWeek?: EnumScheduleCampaignRequestDaysOfWeek[];
  time?: string;
  every?: number;
  dayOfMonth?: number;
  iteration?: number;
  dayOfWeekPerMonth?: EnumScheduleCampaignRequestDayOfWeekPerMonth;
  dayOrder?: EnumScheduleCampaignRequestDayOrder;
}

/** ExpectedCostDto */
export interface ExpectedCostDto {
  expectedCost?: number;
}

/** ResponseDtoExpectedCostDto */
export interface ResponseDtoExpectedCostDto {
  success?: boolean;
  message?: string;
  data?: ExpectedCostDto;
  statusCode?: string;
  metaData?: MetaData;
}

/** CampaignEventRequest */
export interface CampaignEventRequest {
  eventName: string;
  user: UserEventRequest;
  secretKey: string;
  packageCode: string;
}

/** ResponseDtoVoid */
export interface ResponseDtoVoid {
  success?: boolean;
  message?: string;
  data?: object;
  statusCode?: string;
  metaData?: MetaData;
}

/** IGWCampaignEventRequest */
export interface IGWCampaignEventRequest {
  eventName: string;
  user: UserEventRequest;
}

/** CrmLoginRequest */
export interface CrmLoginRequest {
  token: string;
}

/** AuthResponse */
export interface AuthResponse {
  refreshToken?: string;
  accessToken?: string;
  userInfo?: CrmUserResponse;
}

/** CrmUserResponse */
export interface CrmUserResponse {
  spCodes?: string[];
  laoID?: string;
  email?: string;
  role?: EnumCrmUserResponseRole;
  permissions?: EnumCrmUserResponsePermissions[];
}

/** ResponseDtoAuthResponse */
export interface ResponseDtoAuthResponse {
  success?: boolean;
  message?: string;
  data?: AuthResponse;
  statusCode?: string;
  metaData?: MetaData;
}

/** UpdatePriceQuoteRequest */
export interface UpdatePriceQuoteRequest {
  id: string;
  status: EnumUpdatePriceQuoteRequestStatus;
  topUp: PriceModelRequest;
  addMoney: PriceModelRequest;
  addPromotion: PriceModelRequest;
  addData: PriceModelRequest;
  addSMS: PriceModelRequest;
  addCallMinutes: PriceModelRequest;
  notificationSMS: PriceModelRequest;
  notificationMail: PriceModelRequest;
  addPackage: PriceModelRequest;
  registerCRBT?: PriceModelRequest;
  registerNoChargeNoRenewLaoTV?: PriceModelRequest;
}

/** ResponseDtoWorkerLog */
export interface ResponseDtoWorkerLog {
  success?: boolean;
  message?: string;
  data?: WorkerLog;
  statusCode?: string;
  metaData?: MetaData;
}

/** WorkerLog */
export interface WorkerLog {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
  action?: CampaignAction;
  campaignId?: string;
  userId?: string;
  userEmail?: string;
  userName?: string;
  userPhone?: string;
  result?: object;
  groupIndex?: number;
  actionIndex?: number;
  requestId?: string;
}

/** ResponseDtoListUserStatisticDto */
export interface ResponseDtoListUserStatisticDto {
  success?: boolean;
  message?: string;
  data?: UserStatisticDto[];
  statusCode?: string;
  metaData?: MetaData;
}

/** UserStatisticDto */
export interface UserStatisticDto {
  date?: number;
  userCount?: number;
}

/** CampaignActionDto */
export interface CampaignActionDto {
  action?: CampaignAction;
  description?: string;
  startTime?: Date;
  status?: boolean;
  actionIndex?: number;
  groupInteger?: number;
}

/** CampaignActionResponse */
export interface CampaignActionResponse {
  actions?: CampaignActionDto[];
}

/** ResponseDtoListWorkerLogDto */
export interface ResponseDtoListWorkerLogDto {
  success?: boolean;
  message?: string;
  data?: WorkerLogDto[];
  statusCode?: string;
  metaData?: MetaData;
}

/** WorkerLogDto */
export interface WorkerLogDto {
  status?: boolean;
  userInfoModel?: UserInfoModel;
  actionChains?: CampaignActionResponse[];
  createdAt?: Date;
}

/** ResponseDtoListWebHookDto */
export interface ResponseDtoListWebHookDto {
  success?: boolean;
  message?: string;
  data?: WebHookDto[];
  statusCode?: string;
  metaData?: MetaData;
}

/** WebHookDto */
export interface WebHookDto {
  token?: string;
  status?: boolean;
  message?: string;
  createdAt?: Date;
}

/** CrmCompanyDto */
export interface CrmCompanyDto {
  spCode?: string;
  spName?: string;
}

/** ResponseDtoSpCodeDto */
export interface ResponseDtoSpCodeDto {
  success?: boolean;
  message?: string;
  data?: SpCodeDto;
  statusCode?: string;
  metaData?: MetaData;
}

/** SpCodeDto */
export interface SpCodeDto {
  spCodes?: CrmCompanyDto[];
}

/** ResponseDtoListUserLaoIdFieldConfigDto */
export interface ResponseDtoListUserLaoIdFieldConfigDto {
  success?: boolean;
  message?: string;
  data?: UserLaoIdFieldConfigDto[];
  statusCode?: string;
  metaData?: MetaData;
}

/** UserLaoIdFieldConfigDto */
export interface UserLaoIdFieldConfigDto {
  key?: string;
  label?: string;
  dataType?: string;
  table?: string;
}

/** AdminServiceResponse */
export interface AdminServiceResponse {
  id?: string;
  serviceName?: string;
  packageCode?: string;
  secretKey?: string;
}

/** ResponseDtoListAdminServiceResponse */
export interface ResponseDtoListAdminServiceResponse {
  success?: boolean;
  message?: string;
  data?: AdminServiceResponse[];
  statusCode?: string;
  metaData?: MetaData;
}

/** ResponseDtoListServiceDto */
export interface ResponseDtoListServiceDto {
  success?: boolean;
  message?: string;
  data?: ServiceDto[];
  statusCode?: string;
  metaData?: MetaData;
}

/** ResponseDtoListSegmentDto */
export interface ResponseDtoListSegmentDto {
  success?: boolean;
  message?: string;
  data?: SegmentDto[];
  statusCode?: string;
  metaData?: MetaData;
}

/** ResponseDtoListUserInfoModel */
export interface ResponseDtoListUserInfoModel {
  success?: boolean;
  message?: string;
  data?: UserInfoModel[];
  statusCode?: string;
  metaData?: MetaData;
}

/** ResponseDtoListPriceQuoteDto */
export interface ResponseDtoListPriceQuoteDto {
  success?: boolean;
  message?: string;
  data?: PriceQuoteDto[];
  statusCode?: string;
  metaData?: MetaData;
}

/** ResponseDtoListCrmServiceModel */
export interface ResponseDtoListCrmServiceModel {
  success?: boolean;
  message?: string;
  data?: CrmServiceModel[];
  statusCode?: string;
  metaData?: MetaData;
}

/** CampaignResponse */
export interface CampaignResponse {
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  id?: string;
  name?: string;
  description?: string;
  groupId?: string;
  segmentId?: string;
  segment?: SegmentDto;
  status?: EnumCampaignResponseStatus;
  when?: LaunchTimeModel;
  actionChains?: CampaignActionChains[];
  cost?: number;
  maxCost?: number;
  eventName?: string;
}

/** LaunchTimeModel */
export interface LaunchTimeModel {
  type?: EnumLaunchTimeModelType;
  startDate?: Date;
  endDate?: Date;
  schedule?: LaunchSchedule[];
}

/** ResponseDtoListCampaignResponse */
export interface ResponseDtoListCampaignResponse {
  success?: boolean;
  message?: string;
  data?: CampaignResponse[];
  statusCode?: string;
  metaData?: MetaData;
}

/** ResponseDtoListCampaignDto */
export interface ResponseDtoListCampaignDto {
  success?: boolean;
  message?: string;
  data?: CampaignDto[];
  statusCode?: string;
  metaData?: MetaData;
}

/** CampaignGroupResponse */
export interface CampaignGroupResponse {
  id?: string;
  spCode?: string;
  spName?: string;
  serviceName?: string;
  packageCode?: string;
  crmService?: CrmServiceModel;
}

/** ResponseDtoListCampaignGroupResponse */
export interface ResponseDtoListCampaignGroupResponse {
  success?: boolean;
  message?: string;
  data?: CampaignGroupResponse[];
  statusCode?: string;
  metaData?: MetaData;
}
export enum EnumCampaignStatusRequestStatus {
  'DRAFT' = 'DRAFT',
  'SUBMITTED' = 'SUBMITTED',
  'REJECTED' = 'REJECTED',
  'IN_PROGRESS' = 'IN_PROGRESS',
  'PAUSED' = 'PAUSED',
  'CANCELLED' = 'CANCELLED',
  'FINISHED' = 'FINISHED',
}
export enum EnumCampaignActionType {
  'TOP_UP' = 'TOP_UP',
  'ADD_MONEY' = 'ADD_MONEY',
  'ADD_DATA' = 'ADD_DATA',
  'ADD_SMS' = 'ADD_SMS',
  'ADD_CALL_MINUTES' = 'ADD_CALL_MINUTES',
  'ADD_PROMOTION' = 'ADD_PROMOTION',
  'ADD_PACKAGE' = 'ADD_PACKAGE',
  'NOTIFICATION_SMS' = 'NOTIFICATION_SMS',
  'NOTIFICATION_MAIL' = 'NOTIFICATION_MAIL',
  'ADD_UPOINT' = 'ADD_UPOINT',
  'REGISTER_CRBT' = 'REGISTER_CRBT',
  'CANCEL_CRBT' = 'CANCEL_CRBT',
  'LAOTV_MOBILE_5G_NOCHARGE_NORENEW' = 'LAOTV_MOBILE_5G_NOCHARGE_NORENEW',
  'LAOTV_FTTH_RENEWABLE_NOCHARGE' = 'LAOTV_FTTH_RENEWABLE_NOCHARGE',
}
export enum EnumCampaignDtoType {
  'STATIC' = 'STATIC',
  'FROM_EVENT' = 'FROM_EVENT',
}
export enum EnumCampaignDtoStatus {
  'DRAFT' = 'DRAFT',
  'SUBMITTED' = 'SUBMITTED',
  'REJECTED' = 'REJECTED',
  'IN_PROGRESS' = 'IN_PROGRESS',
  'PAUSED' = 'PAUSED',
  'CANCELLED' = 'CANCELLED',
  'FINISHED' = 'FINISHED',
}
export enum EnumCampaignDtoDefaultLanguage {
  'EN' = 'EN',
  'VI' = 'VI',
  'LO' = 'LO',
  'ZH' = 'ZH',
}
export enum EnumCampaignDtoSegmentConfigType {
  'AVAILABLE' = 'AVAILABLE',
  'QUERY' = 'QUERY',
  'FILE' = 'FILE',
}
export enum EnumCampaignGroupDtoStatus {
  'PENDING' = 'PENDING',
  'ACTIVE' = 'ACTIVE',
  'REJECT' = 'REJECT',
  'INACTIVE' = 'INACTIVE',
}
export enum EnumCampaignParamDataType {
  'STRING' = 'STRING',
  'NUMBER' = 'NUMBER',
}
export enum EnumConditionClauseOperator {
  'EQ' = 'EQ',
  'NEQ' = 'NEQ',
  'GT' = 'GT',
  'GTE' = 'GTE',
  'LT' = 'LT',
  'LTE' = 'LTE',
  'CONTAINS' = 'CONTAINS',
  'NOT_CONTAINS' = 'NOT_CONTAINS',
}
export enum EnumConditionClauseOpWithPrev {
  'AND' = 'AND',
  'OR' = 'OR',
}
export enum EnumLaunchScheduleType {
  'DAY' = 'DAY',
  'WEEK' = 'WEEK',
  'MONTH' = 'MONTH',
}
export enum EnumLaunchScheduleDaysOfWeek {
  'MONDAY' = 'MONDAY',
  'TUESDAY' = 'TUESDAY',
  'WEDNESDAY' = 'WEDNESDAY',
  'THURSDAY' = 'THURSDAY',
  'FRIDAY' = 'FRIDAY',
  'SATURDAY' = 'SATURDAY',
  'SUNDAY' = 'SUNDAY',
}
export enum EnumLaunchScheduleDayOfWeekPerMonth {
  'MONDAY' = 'MONDAY',
  'TUESDAY' = 'TUESDAY',
  'WEDNESDAY' = 'WEDNESDAY',
  'THURSDAY' = 'THURSDAY',
  'FRIDAY' = 'FRIDAY',
  'SATURDAY' = 'SATURDAY',
  'SUNDAY' = 'SUNDAY',
}
export enum EnumLaunchScheduleDayOrder {
  'FIRST' = 'FIRST',
  'SECOND' = 'SECOND',
  'THIRD' = 'THIRD',
  'FOURTH' = 'FOURTH',
  'FIFTH' = 'FIFTH',
}
export enum EnumLaunchTimeDtoType {
  'RIGHT_NOW' = 'RIGHT_NOW',
  'ONE_TIME' = 'ONE_TIME',
  'INTERVAL' = 'INTERVAL',
  'RANGE' = 'RANGE',
}
export enum EnumQueryConditionOperator {
  'IS' = 'IS',
  'LIKE' = 'LIKE',
  'NOT' = 'NOT',
  'NOT_LIKE' = 'NOT_LIKE',
  'GREATER_THAN' = 'GREATER_THAN',
  'GREATER_EQUAL_THAN' = 'GREATER_EQUAL_THAN',
  'LESS_THAN' = 'LESS_THAN',
  'LESS_EQUAL_THAN' = 'LESS_EQUAL_THAN',
}
export enum EnumQueryConditionRelation {
  'AND' = 'AND',
  'OR' = 'OR',
}
export enum EnumSegmentDtoType {
  'AVAILABLE' = 'AVAILABLE',
  'QUERY' = 'QUERY',
  'FILE' = 'FILE',
}
export enum EnumTelecomResourceDataDurationUnit {
  'DAY' = 'DAY',
  'WEEK' = 'WEEK',
  'MONTH' = 'MONTH',
  'IN_DAY' = 'IN_DAY',
}
export enum EnumCreateSegmentRequestType {
  'AVAILABLE' = 'AVAILABLE',
  'QUERY' = 'QUERY',
  'FILE' = 'FILE',
}
export enum EnumDataSegmentRequestOperator {
  'IS' = 'IS',
  'LIKE' = 'LIKE',
  'NOT' = 'NOT',
  'NOT_LIKE' = 'NOT_LIKE',
  'GREATER_THAN' = 'GREATER_THAN',
  'GREATER_EQUAL_THAN' = 'GREATER_EQUAL_THAN',
  'LESS_THAN' = 'LESS_THAN',
  'LESS_EQUAL_THAN' = 'LESS_EQUAL_THAN',
}
export enum EnumDataSegmentRequestRelation {
  'AND' = 'AND',
  'OR' = 'OR',
}
export enum EnumCreatePriceQuoteRequestStatus {
  'DRAFT' = 'DRAFT',
  'LOCKED' = 'LOCKED',
  'ENDED' = 'ENDED',
}
export enum EnumPriceQuoteDtoStatus {
  'DRAFT' = 'DRAFT',
  'LOCKED' = 'LOCKED',
  'ENDED' = 'ENDED',
}
export enum EnumCreateCrmServiceRequestStatus {
  'ACTIVE' = 'ACTIVE',
  'INACTIVE' = 'INACTIVE',
}
export enum EnumCrmPackageModelPackagePeriod {
  'DAILY' = 'DAILY',
  'WEEKLY' = 'WEEKLY',
  'MONTHLY' = 'MONTHLY',
  'THREE_MONTHS' = 'THREE_MONTHS',
  'SIX_MONTHS' = 'SIX_MONTHS',
  'NINE_MONTHS' = 'NINE_MONTHS',
  'YEARLY' = 'YEARLY',
}
export enum EnumCrmPackageModelPackageStatus {
  'ACTIVE' = 'ACTIVE',
  'INACTIVE' = 'INACTIVE',
}
export enum EnumCrmServiceModelStatus {
  'ACTIVE' = 'ACTIVE',
  'INACTIVE' = 'INACTIVE',
}
export enum EnumCrmSubServiceModelSubserviceStatus {
  'ACTIVE' = 'ACTIVE',
  'INACTIVE' = 'INACTIVE',
}
export enum EnumCampaignActionRequestType {
  'TOP_UP' = 'TOP_UP',
  'ADD_MONEY' = 'ADD_MONEY',
  'ADD_DATA' = 'ADD_DATA',
  'ADD_SMS' = 'ADD_SMS',
  'ADD_CALL_MINUTES' = 'ADD_CALL_MINUTES',
  'ADD_PROMOTION' = 'ADD_PROMOTION',
  'ADD_PACKAGE' = 'ADD_PACKAGE',
  'NOTIFICATION_SMS' = 'NOTIFICATION_SMS',
  'NOTIFICATION_MAIL' = 'NOTIFICATION_MAIL',
  'ADD_UPOINT' = 'ADD_UPOINT',
  'REGISTER_CRBT' = 'REGISTER_CRBT',
  'CANCEL_CRBT' = 'CANCEL_CRBT',
  'LAOTV_MOBILE_5G_NOCHARGE_NORENEW' = 'LAOTV_MOBILE_5G_NOCHARGE_NORENEW',
  'LAOTV_FTTH_RENEWABLE_NOCHARGE' = 'LAOTV_FTTH_RENEWABLE_NOCHARGE',
}
export enum EnumCreateCampaignRequestType {
  'STATIC' = 'STATIC',
  'FROM_EVENT' = 'FROM_EVENT',
}
export enum EnumCreateCampaignRequestStatus {
  'DRAFT' = 'DRAFT',
  'SUBMITTED' = 'SUBMITTED',
  'REJECTED' = 'REJECTED',
  'IN_PROGRESS' = 'IN_PROGRESS',
  'PAUSED' = 'PAUSED',
  'CANCELLED' = 'CANCELLED',
  'FINISHED' = 'FINISHED',
}
export enum EnumCreateCampaignRequestDefaultLanguage {
  'EN' = 'EN',
  'VI' = 'VI',
  'LO' = 'LO',
  'ZH' = 'ZH',
}
export enum EnumLaunchTimeRequestType {
  'RIGHT_NOW' = 'RIGHT_NOW',
  'ONE_TIME' = 'ONE_TIME',
  'INTERVAL' = 'INTERVAL',
  'RANGE' = 'RANGE',
}
export enum EnumScheduleCampaignRequestType {
  'DAY' = 'DAY',
  'WEEK' = 'WEEK',
  'MONTH' = 'MONTH',
}
export enum EnumScheduleCampaignRequestDaysOfWeek {
  'MONDAY' = 'MONDAY',
  'TUESDAY' = 'TUESDAY',
  'WEDNESDAY' = 'WEDNESDAY',
  'THURSDAY' = 'THURSDAY',
  'FRIDAY' = 'FRIDAY',
  'SATURDAY' = 'SATURDAY',
  'SUNDAY' = 'SUNDAY',
}
export enum EnumScheduleCampaignRequestDayOfWeekPerMonth {
  'MONDAY' = 'MONDAY',
  'TUESDAY' = 'TUESDAY',
  'WEDNESDAY' = 'WEDNESDAY',
  'THURSDAY' = 'THURSDAY',
  'FRIDAY' = 'FRIDAY',
  'SATURDAY' = 'SATURDAY',
  'SUNDAY' = 'SUNDAY',
}
export enum EnumScheduleCampaignRequestDayOrder {
  'FIRST' = 'FIRST',
  'SECOND' = 'SECOND',
  'THIRD' = 'THIRD',
  'FOURTH' = 'FOURTH',
  'FIFTH' = 'FIFTH',
}
export enum EnumCrmUserResponseRole {
  'SUPER_ADMIN' = 'SUPER_ADMIN',
  'ADMIN' = 'ADMIN',
  'OWNER' = 'OWNER',
  'STAFF' = 'STAFF',
  'REVOKED' = 'REVOKED',
}
export enum EnumCrmUserResponsePermissions {
  'REVOKED' = 'REVOKED',
  'SYSTEM_ADMIN' = 'SYSTEM_ADMIN',
  'APPROVE_DECLARATION' = 'APPROVE_DECLARATION',
  'SERVICE_OWNER' = 'SERVICE_OWNER',
  'CREATE_DECLARATION' = 'CREATE_DECLARATION',
  'EDIT_DECLARATION' = 'EDIT_DECLARATION',
  'DELETE_PENDING' = 'DELETE_PENDING',
  'VIEW' = 'VIEW',
}
export enum EnumUpdatePriceQuoteRequestStatus {
  'DRAFT' = 'DRAFT',
  'LOCKED' = 'LOCKED',
  'ENDED' = 'ENDED',
}
export enum EnumCampaignResponseStatus {
  'DRAFT' = 'DRAFT',
  'SUBMITTED' = 'SUBMITTED',
  'REJECTED' = 'REJECTED',
  'IN_PROGRESS' = 'IN_PROGRESS',
  'PAUSED' = 'PAUSED',
  'CANCELLED' = 'CANCELLED',
  'FINISHED' = 'FINISHED',
}
export enum EnumLaunchTimeModelType {
  'RIGHT_NOW' = 'RIGHT_NOW',
  'ONE_TIME' = 'ONE_TIME',
  'INTERVAL' = 'INTERVAL',
  'RANGE' = 'RANGE',
}
