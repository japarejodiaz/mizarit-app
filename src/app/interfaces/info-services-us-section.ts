export interface InfoServicesSection {
  section_title_services?: string;
  section_title_content?: string;
  servicios_list?: servicios_list[];
}
export interface servicios_info {
  services_icon_info?: string;
  services_href_info?: string;
  services_sub_title?: string;
  services_sub_content?: string;
}
export interface servicios_list {
  servicios_info?: servicios_info[];
}
