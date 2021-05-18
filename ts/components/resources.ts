/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

export const RESOURCES = {

    // Common messages +++++++++++++++++++++
    Source: "Source",
    Target: "Target",
    PleaseCompletePrevStep: "Please, complete previous wizard steps.",
    PleaseExecuteJob: "Please, complete all wizard steps and run the Script.",
    GoToNextStep: "Go to next step.",
    Next: "Next",
    Create: "Create",
    Save: "Save",
    Change: "Change",
    NotingToDisplay: "Nothing to display.",
    NoRecords: "No records",
    Unsert: 'Unsert',
    NotSet: 'Not set',
    Summary: 'Summary',
    Setup: 'Setup',
    OnButton: "On",
    OffButton: "Off",
    ExpandCollapse: "Expand/Collapse",
    ExecuteJob: "Run the Script",
    NewVersionAvailable: "New version of the Application is available: v{0} > v{1}.",


    // Menus ++++++++++++++++++++++++++++++++++
    Menu_Connection: "Step 1. Connection",
    Menu_Configuration: "Step 2. Configuration",
    Menu_PreviewScript: "Step 3. Preview Script",
    Menu_ExecuteScript: "Script Execution",
    Menu_DataMigration: "Data Migration",
    Menu_UserProfile: "App Settings",
    Menu_SignOut: "Sign Out",
    Menu_SignIn: "Sign In",
    Menu_Register: "Register",
    Menu_OpenBaseDirectoryInExplorer: "Open root data folder",
    Menu_OpenExportJson: "Open export.json folder",


    // Columns ++++++++++++++++++++++++++++++++++
    Column_FieldName: "Field name",
    Column_ParentSObject: "Parent SObject",
    Column_Property: "Setting",
    Column_PropertyValue: "Value",
    Column_Field: "Field",
    Column_Value: "Value",
    Column_Pattern: "Pattern",
    Column_ExcludeRegExp: "Exclude RegExp",
    Column_IncludeRegExp: "Include RegExp",


    // Pages common +++++++++++++++++++++++++++++
    Page_Connection: "",
    Page_Configuration: "",
    Page_Preview: "",
    Page_ExecuteScript: "",
    Page_StepIsCompleted: "The current wizard step has been completed. Click 'Next' to continue.",
    Page_StepIsNotCompleted: "The current wizard step is in progress...",
    Page_PreviewStepIsCompleted: "All wizard steps have been sucessfully completed. You can now run the Script.",
    Page_ScriptIsExecuting: "The Script is currently running. Wait for process to complete...",
    Page_AbortExecutionButton: "ABORT",


    // Toast ++++++++++++++++++++++++++++++++++++
    DefaultToastMessage: "Success!",
    DefaultToastTitle: "Success",
    DefaultToastErrorTitle: "Error!",
    DefaultToastWarningTitle: "Warning!",
    DefaultToastErrorMessage: "Unknown error!",


    // Modal ++++++++++++++++++++++++++++++++++++
    DefaultModalTitlePrompt: "Enter value",
    DefaultModalMessagePrompt: "Enter value",
    DefaultModalTitleConfirm: "Action confirmation",
    DefaultModalMessageConfirm: "Are your sure?",


    // Loader ++++++++++++++++++++++++++++++++++++
    Loader_DefaultLoaderMessage: 'Working. Please, wait...',

    // Login/Register page +++++++++++++++++++++++
    // Login/Register -> Errors
    Auth_Error_InvalidUserData: "Invalid login data provided. Try to register using another email and/or password.",
    Auth_Error_UserNotFound: "User not found.",

    // Login/Register -> All
    Auth_NewApplicationUser: "New application user",
    Auth_EmailAddress: "Email address",
    Auth_Password: "Auth_Password",
    Auth_PleaseSignIn: "Please, sign in",

    // Connection (home) page ++++++++++++++++++++++
    // Home -> Errors
    Home_Error_ExecuteSFDXFailed: "Error executing SFDX command",
    Home_Error_UnableToConnectToOrg: "Unable to connect to the {0} Org. Check your SFDX authentication data.",
    Home_Error_UnableToConnect: "Unable to connect.",
    Home_Error_UnableToRetrieveMetadata: "Unable to retrieve the {0} metadata. Check your Org access.",

    // Home -> Messages
    Home_Message_ExecutingForceOrgList: "Executing force:org:list...",
    Home_Message_ExecutingForceOrgDisplay: "Executing force:org:diplay for '{0}'...",
    Home_Message_MustSelectDifferentSourceTargetItems: "Please, select different Source and Target items.",
    Home_Message_MustHaveAtLeastOneSFDXOrg: "Currently, there is no any salesforce Org defined in your current user profile.",
    Home_Message_ReadingOrgList: 'Reading list of orgs from the SFDX...',
    Home_Message_ConnectingOrg: "Connecting to the {0} using SFDX CLI...",
    Home_Message_RetrievingOrgMetadata: "Reading {0} Org metadata...",
    Home_Message_MetadataRetrieveSuccess: "Successfully connected.",
    Home_Message_SelectSourceOrTarget: "Please, select Source or/and Target Org at the Connections tab.",
    Home_Message_NoSFDXOrgsDetected: "Failed to execute force:org:list command or no SFDX orgs were detected in your system.",

    // Home -> Tabs
    Home_Tab_Connections: "Connections",
    Home_Tab_TestSFDXCommands: "Test SFDX Commands",

    // Home -> All
    Home_ClickHere: "Click here",
    Home_ToRetrieveListOfOrgs: "to retrieve the complete list of the salesforce orgs registered with the SFDX platform.",
    Home_RetireveOrgsList: "Refresh the list of the registered SFDX orgs.",
    Home_ExecuteForceOrgList: "Run force:org:list",
    Home_ExecuteForceOrgDisplay: "Run force:org:display",
    Home_ExecuteSFDXCommandDescription: "To execute the SFDX command and to view the command output, click on the approprate button above.",
    Home_DownloadJsonOutput: "Save as json",


    // Config page +++++++++++++++++++++++++++++++++++++++++
    // Config -> Messages
    Config_Message_UnusedFolderSuccessfullyRemoved: "The data directory successfully cleaned.",
    Config_Message_ConfigSucessfullyUpdated: "The Configuration was successfully updated.",
    Config_Message_SObjectIsMissingInBothOrgs: "The metadata for the selected SObject was not found.",

    // Config -> Validation errors
    ValidationError_MissingFieldInSourceOrg: "The field is missing in the source Org metadata",
    ValidationError_MissingFieldInTargetOrg: "The field is missing in the target Org metadata",
    ValidationError_MissingSObjectInSourceOrg: "The SObject is missing in the source Org metadata",
    ValidationError_MissingSObjectInTargetOrg: "The SObject is missing in the target Org metadata",
    ValidationError_FieldMetadataErrors: "This object has some errors in the field definitions. You need to fix them or put this object to the 'excluded' state before moving to the next wizard step.",
    ValidationError_InvalidFields: "This object has some errors in the field definitions",
    ValidationError_InvalidFields2: "Some of the selected fields have errors",
    ValidationError_ConfigErrors: "This Configuration has some errors in the object definitions. You need to fix them before moving to the next wizard step.",
    ValidationError_MissingSObjects: "The Configuration has no SObjects",
    ValidationError_ConfigNotSelected: "No Configuration selected yet",
    ValidationError_UnresolvedPolymorphicField: "Unresolved polymorphic field",
    ValidationError_FieldMappingTargetSObjectIsNotExist: "The target sObject is missing in the Org metadata",
    ValidationError_FieldMappingSourceFieldDoesNotExist: "The source field is missing in the metadata of the current sObject",
    ValidationError_FieldMappingTargetFieldDoesNotExist: "The target field is missing in the metadata of the selected target sObject",
    ValidationError_FieldMappingCanContinueUsingThem: "It would be recommended to resolve these issues before moving to the next wizard step.",
    ValidationError_ObjectHasUnbreakingIssues: "This object has some unbreaking issues",
    ValidationError_HasSomeInvalidFieldMappings: "There are some incorrect definitions in the Field Mapping.",
    ValidationError_Separator: "; ",

    // Config -> Tabs
    Config_Tab_ConfigSettings: "Configuration Settings",
    Config_Tab_ConfigObjects: "Configuration Objects",
    Config_Tab_Fields: "Object Fields",
    Config_Tab_Settings: "Object Settings",
    Config_Tab_Polymorphic: "Polymorphic Fields",
    Config_Tab_FieldMapping: "Fields Mapping",
    Config_Tab_DataMasking: "Data Anonymization",
    Config_Tab_QueryTest: "Query String Editor",
    Config_Tab_ExcludedFields: "Excluded Fields",
    Config_Tab_ObjectFields: "Fields in the Query",
    Config_Tab_QueryString: "Edit the SOQL query string",
    Config_Tab_QueryResult: "Query execution result",
    Config_Tab_ObjectSettings: "Common object properties",

    // Config -> List category
    ListCategory_Errors: "Invalid fields",
    ListCategory_Standard: "Standard",
    ListCategory_NonLookup: "Non-Lookup",
    ListCategory_MasterDetail: "Master-detail",
    ListCategory_Autonumber: "Autonumber",
    ListCategory_Formula: "Autonumber",
    ListCategory_Lookup: "Lookup",
    ListCategory_Custom: "Custom",
    ListCategory_Multiselect: "** Special fields **",
    ListCategory_AllFields: "All fields in the object query",
    ListCategory_Separator: " ",

    // Config -> all
    Config_ConfigList: "Select Configuration",
    Config_SwapOrgs: "Swap migration direction.",
    Config_ObjectsList: "Select sObject(s) to add to the Configuration",
    Config_AddNewConfig: "Add new Configuration.",
    Config_EditConfigName: "Edit name of the selected Configuration.",
    Config_CloneConfig: "Clone the selected Configuration.",
    Config_DownloadConfig: "Save the selected Configuration as a .cfg file.",
    Config_UploadConfig: "Import a Configuration from the .cfg file.",
    Config_RemoveConfig: "Remove selected configuration",
    Config_RemoveUnusedConfigFolders: "The current data directory contains old files and folders, that do not belong to the Configuration existing in your user profile. Click here to cleanup the directory.",
    Config_AreYouSureToRemoveUnusedFolders: "Are you sure to start cleanup the data directory? All files will be deleted. Consider archiving necessary information before start to proceed.",
    Config_CleanupDataDirectory: "Clenaup data directory.",
    Config_SelectConfiguration: "Select the existing or create a new Configuration.",
    Config_AddObjectsToTheConfiguration: "Add SObject(s) to the selected Configuration from the list of the available SObjects.",
    Config_SObjectsInTheConfiguration: "SObjects in the Configuration",
    Config_GlobalConfigSettings: "Configuration Settings",
    Config_CreateConfigPrompt: "Enter the name of the new Configuration.",
    Config_CreateConfigTitle: "Create a new Configuration.",
    Config_CloneConfigPrompt: "Enter the name of the cloned Configuration.",
    Config_CloneConfigTitle: "Clone the Configuration.",
    Config_DeleteConfigTitle: "Delete the Configuration.",
    Config_EditConfigPrompt: "Enter the new name of the Configuration.",
    Config_EditConfigTitle: "Rename the Configuration.",
    Config_SelectSObject: "To view the SObject properties, select a SObject from the list at the left side.",
    Config_AddObjects: "Add SObjects to the Configuration.",
    Config_DescribingSObject: "Retrieving the description of the SObject {0} from the {1}...",
    Config_SelectedFields: "Selected Fields",
    Config_AllSelectedFields: "Selected Fields",
    Config_ExcludedFields: "Excluded Fields",
    Config_AvailableFields: "Available SObject Fields",
    Config_SearchFields: "Search...",
    Config_EnterQueryForSObject: "Enter the SOQL query string",
    Config_ExecuteQuery: "Execute the query",
    Config_UpdateSObjectQueryString: "Update the object fields from the query",
    Config_ReferencedFieldsNotAllowedToUse: "Referenced fields or subqueries {0} are not allowed.",
    Config_SObjectHasUnresolvedPolymorphicFields: "The current SObject has unresolved polymorphic referenced fields: some of them are missing mandatory definition of the parent sObject. Use this tab to resolve all polymorphic fields in the Configuration.",
    Config_RunQueryOn: 'Execute the query on',
    Config_OtherSettings: "Other settings:",
    Config_WhereClause: "WHERE",
    Config_DeleteWhereClause: "Delete WHERE",
    Config_ExternalIdField: "External Id",
    Config_Operation: "Operation:",
    Config_LimitClause: "LIMIT",
    Config_OrderByClause: "ORDER BY",
    Config_ExternalIdEnterMode: "",
    Config_ManualExternalIdMode: "Enter manually",
    Config_FromListExternalIdMode: "Select from the list",
    Config_TargetFilter: "Target record filter expression",
    Config_MoveObjectUp: "Move this object up within the execution order when keepObjectOrderWhileExecute = true",
    Config_MoveObjectDown: "Move this object down within the execution order when keepObjectOrderWhileExecute = true",
    Config_RemoveObject: "Remove this object from the Configuration",
    Config_ExcludeObject: "Allow migration of this object (set/unset the 'excluded' property)",
    Config_DeleteOldDataTag: "DELETE OLD DATA",
    Config_MasterTag: "*MASTER*",
    Config_AddNewMappingButton_TargetSObject: "Set the target sObject",
    Config_AddNewMappingButton_Field: "Add new field mapping item",
    Config_AddNewMappingButtonDescription: "In order to add a new mapping item, click on the button below.",
    Config_RemoveNewMappingButton: "Remove this item",
    Config_SelectTargetSObjectToMap: "Target sObject name to map",
    Config_SelectSourceFieldToMap: "Source field",
    Config_SelectTargetFieldToMap: "Target field",
    Config_ValidateConfigurationButton: "Validate the Configuration",
    Config_ReconnectOrgsButton: "Reconnect to the orgs",
    Config_ValidateConfigurationStarted: "Validation of the Configuration has been started...",
    Config_ValidateConfigurationFailed: "Validation of the Configuration has been failed. You must review and fix the issues before move to the next wizard step.",
    Config_ValidateConfigurationSucceeded: "Validation of the Configuration has been completed successfully.",    
    Config_AddNewMockingFieldItemButtonDescription: "In order to add a new anonymizaton rule, select the field to be anonymized from the dropdown below and click on the '+' button.",
    Config_NoFieldsAvailableForAnonymization: "There are no fields available for the anonymization or they all were already assigned.",
    Config_NoFieldsAvailableForMapping: "There are no fields which available for the field mapping or they all were already assigned.",
    Config_EnterRegExp: "Enter a javascript RegExp",
    // -- help -- //
    Config_Help_WhereClause: "Enter only the WHERE expression without keyword 'WHERE'",
    Config_Help_DeleteWhereClause: "Enter only the WHERE expression without keyword 'WHERE'",
    Config_Help_LimitClause: "Enter the number of limited records",
    Config_Help_OrderByClause: "Enter only the ORDER BY expression without keyword 'ORDER BY'",
    Config_Help_ManualExternalIdEnterModeSwitch: "Switch between selecting the ExternalId field from the list and manual enter in the textbox (for example when you need to define a compoiste ExternalId key)",
    Config_Help_TargetFilter: "Enter the target record filter expression",
    Config_Help_SelectTargetSObjectToMap: "Enter the target sObject to map the current sObject to it. You can enter any sObject name or use the suggested values from the autocomplete. Note, that only the fields belong to the choosen SObject should be used as the target fields for the all following field mappings.",
    Config_Help_SelectSourceFieldToMap: "Enter the source field from the current sObject.",
    Config_Help_SelectTargetFieldToMap: "Enter the target field from the selected target SObject to map the given source field to it.",
    Config_Help_ValidateConfigurationButton: "Click to validate the current Configuration. The validation will detect possible critical issues in the migration script. Only after the Configuration is passed the validation you will be able to move to the next wizad step. The validation also will run before switching the step, when you will click on the Next button.",
    Config_Help_ReconnectOrgsButton: "Click to reconnect to the selected Salesforce orgs and to retrieve the Org description data from scratch.",
    
    



    // Preview page +++++++++++++++++++++++++++++++++++++++++
    Preview_NextStep: "Click to start the Plugin with the selected configuration.",
    Preview_CLICommandDescription: "To manually run the package, paste and execute the command below in the Terminal/Command console:",
    Preview_CopyCLICommandButton: "Click to copy the command to the Clipboard",
    Preview_MigrationDirection: "Migration direction",
    Preview_CLICommandCopiedMessage: "Copied!",
    Preview_FullScript: "Full export.json",
    Preview_MinimalScript: "Minimal export.json",
    Preview_WhichExportJsonVersion: "Which version of export.json file to generate?",
    // -- help -- //
    Preview_Help_WhichExportJsonVersion: "The Minimal version will include only the properties, which were changed under the current Configuration omitting the default values. The Full version will always include ALL properties, regardless the change status.",



    // Execute page +++++++++++++++++++++++++++++++++++++++++
    Execute_AreYouSureToAbortExecution: "Are you sure to abort the package execution?",
    Execute_Message_ExecuteFinishedWithCode: "Executing finished with code",



    // Profile page +++++++++++++++++++++++++++++++++++++++++
    Profile_EmailAndPassword: "Email and password",
    Profile_ApplicationSettings: "Application global settings",
    Profile_EnterNewEmailAddress: "Enter new email address",
    Profile_EnterNewPassword: "Enter new password",
    Profile_MoveFilesWithDb: "Move all files and folders to the new location",
    Profile_EnterDbName: "Enter database filename",
    Profile_DbName: "Database filename",
    Profile_DatabaseSubfolderName: "Subfolder name",
    Profile_SelectPath: "Browse to change...",
    Profile_CurrentBasePath: "Base directory",
    Profile_SaveSettings: "Save settings",
    Profile_UserProfileSaved: "The settings were successfully saved.",
    Profile_EmailOrPasswrodInUse: "Ivalid login data provided. Try to enter another email or password.",


}
