import { Cxmsg } from "./cxmsg.js";
import { Login } from "./login149.js";


const callback_ok = ()=>{
    
}

const callback_naook = ()=>{
    const config={
        cor : "#800",
        tipo: "ok",
        testos: null,
        comando_sn:null,
    }
    Cxmsg.mostrar(config,"Erro","login nao efetuado! Usuario / senha incorretos.")

}    

Login.login(callback_ok,callback_naook);