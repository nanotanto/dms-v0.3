var menu_data = [
		{id: "home.index", icon: "fas fa-home", value: "Home"},

		{id: "document", icon: "fas fa-book", value:"Document Management", data:[
			{ id: "document.internal.index", value: "Internal Document"},
			{ id: "document.external.index", value: "External Document"},
			{ id: "document.ygk_yqs.index", value: "YGK & YQS"},
			{ id: "document.drawing.index", value: "Drawing List"},

		]},

		{id: "risk", icon: "fas fa-warning", value:"Risk Management", data:[
			//{ id: "risk", value: "Risk Management"},
			{ id: "risk.sipocorr.index", value: "SIPOCORR"},
			{ id: "risk.fmea.index", value: "FMEA"},
			//{ id: "bares", value: "BARES"},
			//{ id: "asdam", value: "ASDAM"}

		]},

		//{id: "accident", icon: "fas fa-plus-square", value:"Accident & Incident"},

		//{id: "legal", icon: "fas fa-legal", value:"Legal Compliance"},

		//{id: "equipment", icon: "fas  fa-wrench", value:"Equipment & Facility"},

		//{id: "human", icon: "fas  fa-users", value:"Human Resources"},

		//{id: "supplier", icon: "fas  fa-truck", value:"Supplier Management"},

		{id: "audit", icon: "fas fa-check-square-o ", value:"Audit", data:[
			{id: "audit.internal.index", value: "Internal Audit"},
			{id: "audit.external.index", value: "External Audit"},
			//{id: "user.safety.skib", value: "SKIB" }
		]},

		{id: "review.index", icon: "fas fa-search-plus", value:"Management Review"},

		//{id: "improve", icon: "bar-chart-o ", value:"Improvement"}
		{id: "quality.index", icon: "fas fa-bar-chart", value:"Quality Report"},

		{id: "events.index", icon: "fas fa-calendar", value: "Events Calendar"},
		
		{id: "structure", icon: "fas fa-group ", value:"Structure", data:[
			{id: "structure.all", value: "All"},
			{id: "structure.division.index", value: "Division"},
			{id: "structure.department.index", value: "Department"},
			{id: "structure.section.index", value: "Section"}
		]},

		{id: "category", icon: "fas fa-list ", value:"Category Audit", data:[
			{id: "category.requirement.index", value: "Requirement System"},
			{id: "category.clause.index", value: "Clause"},
			{id: "category.type.index", value: "Type Audit"},
			{id: "category.finding.index", value: "Category Finding"},			
			{id: "category.status.index", value: "Status Audit"}
		]},

	];