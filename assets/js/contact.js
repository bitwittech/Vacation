const select=document.getElementById("contoury-contact-form"),tourField=document.getElementById("contact-tour"),tourDuration=document.getElementById("duration"),personList=document.getElementById("person"),query=new URLSearchParams(window.location.search),params=query.get("tour"),list20=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],durationList=["1","2","3","4","5","6","7","8","9","10","11","12","13","02 settimane","03 settimane"];function Setduration(){let a=durationList.map(a=>`<option value='${a}'>${a}</option>`);tourDuration.innerHTML=` <option value="">Durata del viaggio* </option> ${a}`;let e=list20.map(a=>`<option value='${a}'>${a}</option>`);personList.innerHTML=`<option value="">Numero delle persone* </option>${e}`}function getTourParams(){let a="";switch(params){case"ranthambore":a="Triangolo Doro Con Tigri";break;case"rajasthan":a="Breve Tour Del Rajasthan";break;case"north-in":case"offer-tour-3":a="Classico Nord India Tour";break;case"central-in":a="Centrale India Tour Con Mumbai";break;case"kathmandu":a="Classico Nord India Tour Con Kathmandu";break;case"south-in":a="Classico India Del Sud Tour";break;case"rj-varansi":a="Gran Tour Del Rajasthan Con Khajuraho e Varanasi";break;case"grand-south-india":a="Gran Tour India Del Sud";break;case"orisa":a="Culturale e Rustic Tour dell’Orisa Con Trib\xf9";break;case"kerela":a="Il Paese Del Dio Kerala";break;case"kerela-mare-tour":a="Kerala India Viaggi Con Mare";break;case"karnataka-goa":a="Karnataka India Del Sud Tour Con Goa";break;case"rajasthan-varansi":a="Rajasthan Viaggi Con Varanasi";break;case"sikkam-orisa":a="Sikkim, Bengala e Orissa Tour";break;case"rajasthan-2":a="La Terra Dei Re Rajasthan Tour";break;case"kathmandu-2":a="Triangolo Doro Con Kathmandu";break;case"agra-varansi":a="Triangolo Doro Con Varanasi";break;case"delhi-agra":a="Triangolo Doro India Viaggi";break;case"offer-tour-1":a="Rajasthan Classico Con Percorso Di Yoga";break;case"offer-tour-kerela":a="India Del Sud Con Kerala Tour";break;default:a="festa indiana"}tourField.value=a}window.addEventListener("DOMContentLoaded",getTourParams);