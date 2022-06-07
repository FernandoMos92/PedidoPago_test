exports.id = 974;
exports.ids = [974];
exports.modules = {

/***/ 996:
/***/ ((module) => {

// Exports
module.exports = {
	"cardContainer": "style_cardContainer__UKsCG",
	"iconArrowDown": "style_iconArrowDown__7gKkC",
	"cardContainerDrop": "style_cardContainerDrop__XHl9L",
	"gridContainer": "style_gridContainer__CQSwN",
	"activeUser": "style_activeUser__sQ8dg"
};


/***/ }),

/***/ 9983:
/***/ ((module) => {

// Exports
module.exports = {
	"headerContainer": "style_headerContainer__8ihe8",
	"userIcon": "style_userIcon__y6Rf8",
	"logoContainer": "style_logoContainer__fFJB4",
	"headerContainerBigSize": "style_headerContainerBigSize__F2SXd",
	"userContainer": "style_userContainer__9dJEM",
	"nameContainer": "style_nameContainer__yd__r"
};


/***/ }),

/***/ 3996:
/***/ ((module) => {

// Exports
module.exports = {
	"cardPosition": "style_cardPosition__zQcoX",
	"cardPositionDrop": "style_cardPositionDrop__8MNeT",
	"topContainer": "style_topContainer__QOUgW",
	"bottomContainer": "style_bottomContainer__4SWof"
};


/***/ }),

/***/ 341:
/***/ ((module) => {

// Exports
module.exports = {
	"searchContainer": "style_searchContainer__6wp9L",
	"inputContainer": "style_inputContainer__yy7Kl",
	"searchIcon": "style_searchIcon__vADDI",
	"horizonLine": "style_horizonLine__Dej6V",
	"cardContainer": "style_cardContainer__wdYd7",
	"btnMore": "style_btnMore__LyCAi",
	"mainContainer": "style_mainContainer__XfyXG",
	"boardContainer": "style_boardContainer__y39yn",
	"menuContainer": "style_menuContainer__YgcXm",
	"searchBoxContainer": "style_searchBoxContainer__V5U6t",
	"searchIconBigSize": "style_searchIconBigSize__mIWiQ",
	"searchBox": "style_searchBox__71ABH"
};


/***/ }),

/***/ 7650:
/***/ ((module) => {

// Exports
module.exports = {
	"modalEmployer": "style_modalEmployer__M5Gcx"
};


/***/ }),

/***/ 8974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Header/style.module.scss
var style_module = __webpack_require__(9983);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: ./src/hook/UseWindowSize.ts
var UseWindowSize = __webpack_require__(5690);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx




function Header() {
    const size = (0,UseWindowSize/* useWindowSize */.i)();
    return size.width >= 1024 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (style_module_default()).headerContainerBigSize,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/images/brand.svg",
                        alt: "Logo PedidoPago"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (style_module_default()).userContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (style_module_default()).userIcon,
                        children: "LZ"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (style_module_default()).nameContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "Luiz Zlochevsky"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "meu dados"
                            })
                        ]
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (style_module_default()).headerContainer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (style_module_default()).userIcon,
                children: "LZ"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (style_module_default()).logoContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/images/brand.svg",
                            alt: "Logo PedidoPago"
                        })
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/SearchEmployer/style.module.scss
var SearchEmployer_style_module = __webpack_require__(341);
var SearchEmployer_style_module_default = /*#__PURE__*/__webpack_require__.n(SearchEmployer_style_module);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: ./src/components/EmployerCard/style.module.scss
var EmployerCard_style_module = __webpack_require__(996);
var EmployerCard_style_module_default = /*#__PURE__*/__webpack_require__.n(EmployerCard_style_module);
;// CONCATENATED MODULE: ./src/components/EmployerCard/index.tsx





function EmployerCard({ employer  }) {
    const { 0: isDrop , 1: setIsDrop  } = (0,external_react_.useState)(false);
    const { 0: isModal , 1: setIsModal  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: isDrop ? (EmployerCard_style_module_default()).cardContainerDrop : (EmployerCard_style_module_default()).cardContainer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: "Nome completo"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: employer.image,
                                alt: employer.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: employer.name
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiChevronDown, {
                        onClick: ()=>setIsDrop(!isDrop)
                        ,
                        className: (EmployerCard_style_module_default()).iconArrowDown
                    })
                ]
            }),
            isDrop && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (EmployerCard_style_module_default()).gridContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "Departamento"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: employer.department
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "Cargo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: employer.role
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "Unidade"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: employer.agent_id
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "Unidade"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: employer.branch
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (EmployerCard_style_module_default()).activeUser,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "Status"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                style: employer.status === "inactive" ? {
                                    backgroundColor: "red",
                                    color: "#FFF"
                                } : {
                                    backgroundColor: "#B5F1DD",
                                    color: "#34423D "
                                },
                                children: employer.status
                            })
                        ]
                    }),
                    !isModal ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        onClick: ()=>setIsModal(!isModal)
                        ,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/images/file-plus.svg",
                                alt: "Icon file plus"
                            }),
                            "A\xe7\xf5es"
                        ]
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        onClick: ()=>setIsModal(!isModal)
                        ,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components.SeeEmployerModal, {})
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/api/connection/index.ts
var connection = __webpack_require__(1193);
// EXTERNAL MODULE: external "react-infinite-scroller"
var external_react_infinite_scroller_ = __webpack_require__(5030);
var external_react_infinite_scroller_default = /*#__PURE__*/__webpack_require__.n(external_react_infinite_scroller_);
;// CONCATENATED MODULE: ./src/components/SearchEmployer/index.tsx








function SearchEmployer() {
    const { 0: allEmployers , 1: setAllEmployers  } = (0,external_react_.useState)([]);
    const { 0: employers , 1: setEmployers  } = (0,external_react_.useState)([]);
    const { 0: isLoadingEmployersOnce , 1: setisLoadingEmployersOnce  } = (0,external_react_.useState)(true);
    const { 0: hasMoreEmployers , 1: setHasMoreEmployers  } = (0,external_react_.useState)(true);
    const { 0: filterUser , 1: setUserFilter  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        async function resultResponse() {
            const result = await (0,connection/* allEmployer */.QC)();
            const { items  } = result.data;
            setAllEmployers(items);
            setisLoadingEmployersOnce(false);
        }
        resultResponse();
    }, []);
    const loadMoreEmployers = (page)=>{
        const start = 0;
        const end = start + page * 6;
        const totalPages = Math.ceil(allEmployers.length / 6);
        const hasMoreEmployersToLoad = page < totalPages;
        setHasMoreEmployers(hasMoreEmployersToLoad);
        const newEmployers = allEmployers.slice(start, end);
        setEmployers(newEmployers);
    };
    const inputChange = ({ target  })=>{
        setUserFilter(target.value);
    };
    const renderEmployerFilter = allEmployers.filter((employer)=>{
        if (filterUser === "") return employer;
        if (employer.name.includes(filterUser)) return employer;
    });
    const size = (0,UseWindowSize/* useWindowSize */.i)();
    return size.width >= 1024 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: (SearchEmployer_style_module_default()).mainContainer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("aside", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (SearchEmployer_style_module_default()).boardContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Organiza\xe7\xe3o"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: (SearchEmployer_style_module_default()).menuContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Colabores"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Cargos"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (SearchEmployer_style_module_default()).searchBoxContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Pesquisar por"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiSearch, {
                                className: (SearchEmployer_style_module_default()).searchIconBigSize
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (SearchEmployer_style_module_default()).searchBox,
                                type: "text",
                                placeholder: "Pesquise por nome ou cpf",
                                name: "",
                                id: ""
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Listagem de colaboradores"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("table", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("thead", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: "Nome completo"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: "Departamento"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: "Cargo"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: "Unidade"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            children: "Status"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                    children: employers.map((employer)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: employer.image,
                                                                alt: employer.name
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: employer.name
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: employer.department
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: employer.role
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: employer.branch
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: employer.status
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    )
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (SearchEmployer_style_module_default()).searchContainer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                        name: "",
                        id: "",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "",
                                children: "Colaboradores"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "",
                                children: "Cargos"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (SearchEmployer_style_module_default()).inputContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Pesquisar por"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiSearch, {
                                className: (SearchEmployer_style_module_default()).searchIcon
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                onChange: inputChange,
                                type: "text",
                                value: filterUser,
                                placeholder: "Pesquise por nome ou cpf"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: (SearchEmployer_style_module_default()).horizonLine
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (SearchEmployer_style_module_default()).cardContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Listagem de colaboradores"
                    }),
                    isLoadingEmployersOnce ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: (SearchEmployer_style_module_default()).btnMore,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/images/refresh-ccw.svg",
                                alt: "Refresh logo"
                            }),
                            "Carregar mais"
                        ]
                    }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_infinite_scroller_default()), {
                        pageStart: 0,
                        loadMore: loadMoreEmployers,
                        hasMore: hasMoreEmployers,
                        loader: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            className: (SearchEmployer_style_module_default()).btnMore,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/refresh-ccw.svg",
                                    alt: "Refresh logo"
                                }),
                                "Carregar mais"
                            ]
                        }, employers.length),
                        children: renderEmployerFilter.map((employer, index)=>/*#__PURE__*/ jsx_runtime_.jsx(EmployerCard, {
                                employer: employer
                            }, index)
                        )
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/DetailsCard/index.tsx + 2 modules
var DetailsCard = __webpack_require__(9803);
// EXTERNAL MODULE: ./src/components/PositionCard/style.module.scss
var PositionCard_style_module = __webpack_require__(3996);
var PositionCard_style_module_default = /*#__PURE__*/__webpack_require__.n(PositionCard_style_module);
;// CONCATENATED MODULE: ./src/components/PositionCard/index.tsx




function PositionCard() {
    const { 0: isDrop , 1: setIsDrop  } = (0,external_react_.useState)(true);
    return isDrop ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (PositionCard_style_module_default()).cardPositionDrop,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (PositionCard_style_module_default()).topContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                children: "Cargo"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Analista"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                children: "Departamento"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "SAC"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiChevronDown, {
                        onClick: ()=>setIsDrop(!isDrop)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (PositionCard_style_module_default()).bottomContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        children: "Colaboradores"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "2"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/images/file-plus.svg",
                                alt: ""
                            }),
                            "A\xe7\xf5es"
                        ]
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (PositionCard_style_module_default()).cardPosition,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        children: "Cargo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Analista"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiChevronDown, {
                onClick: ()=>setIsDrop(!isDrop)
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/SeeEmployerModal/style.module.scss
var SeeEmployerModal_style_module = __webpack_require__(7650);
var SeeEmployerModal_style_module_default = /*#__PURE__*/__webpack_require__.n(SeeEmployerModal_style_module);
;// CONCATENATED MODULE: ./src/components/SeeEmployerModal/index.tsx



const SeeEmployerModal = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (SeeEmployerModal_style_module_default()).modalEmployer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/employer-details",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/images/eye.svg",
                                alt: "Icon eye"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Ver colaborador"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/images/trash-2.svg",
                        alt: "Icon trash"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Excluir"
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/index.tsx





/* harmony default export */ const components = ({
    Header: Header,
    SearchEmployer: SearchEmployer,
    DetailsCard: DetailsCard/* DetailsCard */.D,
    PositionCard: PositionCard,
    SeeEmployerModal: SeeEmployerModal
});


/***/ }),

/***/ 5690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useWindowSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useWindowSize = ()=>{
    const { 0: windowSize , 1: setWindowSize  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        width: 950,
        height: 950
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (false) {}
    }, []);
    return windowSize;
};


/***/ })

};
;