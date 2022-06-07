exports.id = 803;
exports.ids = [803];
exports.modules = {

/***/ 4804:
/***/ ((module) => {

// Exports
module.exports = {
	"containerCardDetails": "style_containerCardDetails__OCRE_",
	"containerPerfil": "style_containerPerfil__d3EOm",
	"namePerfil": "style_namePerfil__587Ty"
};


/***/ }),

/***/ 8085:
/***/ ((module) => {

// Exports
module.exports = {
	"containerCpf": "style_containerCpf__NsCb_",
	"containerPhone": "style_containerPhone__FemQS",
	"containerCalendar": "style_containerCalendar__R0e07",
	"containerImage": "style_containerImage__UDTvT",
	"containerData": "style_containerData__kO1JQ"
};


/***/ }),

/***/ 5719:
/***/ ((module) => {

// Exports
module.exports = {
	"containerOrganizational": "style_containerOrganizational__wAo_K",
	"selectOptions": "style_selectOptions__DYkSB"
};


/***/ }),

/***/ 1193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QC": () => (/* binding */ allEmployer),
/* harmony export */   "vH": () => (/* binding */ employerDatails)
/* harmony export */ });
/* unused harmony exports positionList, positionPermission */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const axiosHelper = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "https://pp-api-desafio.herokuapp.com"
});
const allEmployer = async ()=>axiosHelper.get("/agents")
;
const positionList = async ()=>axiosHelper.get("/roles")
;
const employerDatails = async ()=>axiosHelper.get("/agent/1")
;
const positionPermission = async ()=>axiosHelper.get("/role/1")
;


/***/ }),

/***/ 9803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ DetailsCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/InputComponent/style.module.scss
var style_module = __webpack_require__(8085);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: ./src/components/InputComponent/index.tsx


function InputComponent({ cpf: cpf1 , tel , birthDate: birthDate1  }) {
    const formateDate = (birthDate)=>{
        const date = new Date(birthDate);
        return `${date.toLocaleDateString()}`;
    };
    const formateDocument = (cpf)=>{
        const CPF = `${cpf.slice(0, 3)} ${cpf.slice(3, 6)} ${cpf.slice(6, 9)} ${cpf.slice(9, 11)}`;
        return CPF;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (style_module_default()).containerCpf,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (style_module_default()).containerImage,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/images/id.svg",
                            alt: "id icon"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (style_module_default()).containerData,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "CPF"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: formateDocument(cpf1)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (style_module_default()).containerPhone,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (style_module_default()).containerImage,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/images/phone-call.svg",
                            alt: "Phone icon"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (style_module_default()).containerData,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Telefone"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                children: [
                                    "+",
                                    tel.ddd,
                                    " ",
                                    tel.ddi,
                                    " ",
                                    tel.number
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (style_module_default()).containerCalendar,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (style_module_default()).containerImage,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/images/calendar.svg",
                            alt: "Calendar icon"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (style_module_default()).containerData,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Nascimento"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: formateDate(birthDate1)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/DetailsCard/style.module.scss
var DetailsCard_style_module = __webpack_require__(4804);
var DetailsCard_style_module_default = /*#__PURE__*/__webpack_require__.n(DetailsCard_style_module);
// EXTERNAL MODULE: ./src/components/OrganizationalData/style.module.scss
var OrganizationalData_style_module = __webpack_require__(5719);
var OrganizationalData_style_module_default = /*#__PURE__*/__webpack_require__.n(OrganizationalData_style_module);
;// CONCATENATED MODULE: ./src/components/OrganizationalData/index.tsx


function OrganizationalData({ id , department , role , status  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (OrganizationalData_style_module_default()).containerOrganizational,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Dados organizacionais"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Departamento"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("select", {
                        className: (OrganizationalData_style_module_default()).selectOptions,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "Comercial",
                            children: department
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Cargo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("select", {
                        className: (OrganizationalData_style_module_default()).selectOptions,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "Gerente",
                            children: role
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Unidade"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("select", {
                        className: (OrganizationalData_style_module_default()).selectOptions,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                            value: "Unidade 1",
                            children: [
                                "Unidade ",
                                id
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Status"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("select", {
                        className: (OrganizationalData_style_module_default()).selectOptions,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: status,
                            children: status
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/api/connection/index.ts
var connection = __webpack_require__(1193);
;// CONCATENATED MODULE: ./src/components/DetailsCard/index.tsx






const DetailsCard = ()=>{
    const { 0: employerDetails , 1: setEmployerDetails  } = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            const details = (await (0,connection/* employerDatails */.vH)()).data.agent;
            setEmployerDetails(details);
        })();
    }, []);
    return employerDetails ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (DetailsCard_style_module_default()).containerCardDetails,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (DetailsCard_style_module_default()).containerPerfil,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: employerDetails.image,
                        alt: employerDetails.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (DetailsCard_style_module_default()).namePerfil,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: employerDetails.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: employerDetails.email
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Informa\xe7\xf5es pessoais"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InputComponent, {
                cpf: employerDetails.document.number,
                tel: employerDetails.phone,
                birthDate: employerDetails.birth_date
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(OrganizationalData, {
                id: employerDetails.id,
                department: employerDetails.department,
                role: employerDetails.role,
                status: employerDetails.status
            })
        ]
    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Loading..."
    });
};


/***/ })

};
;