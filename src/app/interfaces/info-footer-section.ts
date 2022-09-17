export interface InfoFooterSection {
	section_title_footer_col_1?: string;
	direccion_info?: direccion[];
	contact_phone?: string;
	contact_email?: string;
	section_title_footer_col_2?: string;
	our_links?: our_links[];
	section_title_footer_col_3?: string;
	our_services?: our_services[];
	section_title_footer_col_4?: string;
	section_title_content_col_4?: string;
	our_networks?: our_networks[];
}
export interface direccion {
	direccion?: string;
}
export interface our_links {
	title_enlace?: string;
	href_enlace?: string;
}
export interface our_services {
	title_enlace?: string;
	href_enlace?: string;
}
export interface our_networks {
	title_enlace?: string;
	href_enlace?: string;
}
