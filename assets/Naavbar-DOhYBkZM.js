const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LazyImage-vujPIqs6.js","assets/index-DaD8nTqV.js","assets/index-oZ9PjJyh.css"])))=>i.map(i=>d[i]);
import{r as i,_ as h,j as e,L as n}from"./index-DaD8nTqV.js";import{C as d,U as m}from"./users-BCuxne_c.js";import{c as o}from"./createLucideIcon-BW0xkuBg.js";/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=o("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=o("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.464.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=o("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),g=i.lazy(()=>h(()=>import("./LazyImage-vujPIqs6.js"),__vite__mapDeps([0,1,2]))),N=()=>{const[a,t]=i.useState(null),[r,x]=i.useState(!1),c=[{label:"Admissions",icon:e.jsx(u,{}),subItems:[{label:"Criteria",link:"/admissions/criteria"},{label:"Application",link:"/admissions/application"}]},{label:"Login",icon:e.jsx(m,{}),subItems:[{label:"Faculty",link:"/teacher"},{label:"Students",link:"/student"}]}],b=s=>{t(a===s?null:s)};return e.jsxs("nav",{className:"fixed top-0 left-0 right-0 bg-white shadow-md z-50 ",children:[e.jsxs("div",{className:"container mx-auto px-4 py-3 flex justify-between items-center border-b-slate-500 border-b",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(g,{src:"/img/logo.jpg",placeholder:"./img/logo.jpg",alt:"Logo",className:"h-10 w-10",title:"Maitree Model Mission"}),e.jsx(n,{className:"text-xl font-bold text-blue-800 hover:text-blue-500",to:"/",children:"Maitree Model Mission"})]}),e.jsx("div",{className:"hidden md:flex space-x-6 items-center",children:c.map(s=>e.jsxs("div",{className:"relative group",onMouseEnter:()=>t(s.label),onMouseLeave:()=>{t(null)},children:[e.jsxs("button",{className:"flex items-center text-gray-700 hover:text-blue-600 transition",children:[s.icon,e.jsx("span",{className:"ml-2",children:s.label}),e.jsx(d,{size:16,className:"ml-1"})]}),a===s.label&&e.jsx("div",{className:"absolute top-full left-0 bg-white shadow-lg rounded-md pb-2 min-w-[200px] ",children:s.subItems.map(l=>e.jsx(n,{to:l.link,className:"block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600",children:l.label},l.label))})]},s.label))}),e.jsx("div",{className:"md:hidden",children:e.jsx("button",{onClick:()=>x(!r),className:"bg-white text-gray-700 hover:text-blue-600  p-2 rounded-md",children:e.jsx(j,{size:24})})})]}),r&&e.jsx("div",{className:"md:hidden bg-white shadow-md",children:c.map(s=>e.jsxs("div",{className:"border-b",children:[e.jsxs("button",{onClick:()=>b(s.label),className:"w-full flex justify-between items-center bg-white p-4 text-gray-700 hover:bg-blue-50",children:[e.jsxs("div",{className:"flex items-center",children:[s.icon,e.jsx("span",{className:"ml-2",children:s.label})]}),a===s.label?e.jsx(d,{size:16}):e.jsx(p,{size:16})]}),a===s.label&&e.jsx("div",{className:"bg-blue-50 py-2 transition",children:s.subItems.map(l=>e.jsx(n,{to:l.link,className:"block px-4 py-2 text-gray-700 hover:bg-blue-100",children:l.label},l.label))})]},s.label))})]})};export{N as default};
