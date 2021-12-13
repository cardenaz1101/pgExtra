import { Response, Request } from "express";
const PostgresExtras = require("postgres-extras").PostgresExtras

const getIndexSize = async(req: Request, res: Response) => {
    const {userPsql, nameDB, password, port, host} = req.body;
    const conection = conectionDB(userPsql, nameDB, password, port, host);
    PostgresExtras.index_size(conection);
}

const getIndexCacheHit = async(req: Request, res: Response) => {
    const {userPsql, nameDB, password, port, host} = req.body;
    const conection = conectionDB(userPsql, nameDB, password, port, host);
    PostgresExtras.index_cache_hit(conection);
}

const getUnusedIndexes = async(req: Request, res: Response) => {

    const {userPsql, nameDB, password, port, host} = req.body;
    const conection = conectionDB(userPsql, nameDB, password, port, host);
    PostgresExtras.unused_indexes(conection);
}

const getNullIndexes = async(req: Request, res: Response) => {

    const {userPsql, nameDB, password, port, host} = req.body;
    const conection = conectionDB(userPsql, nameDB, password, port, host);
    PostgresExtras.null_indexes(conection);
}

const getVacuumStats = async(req: Request, res: Response) => {

    const {userPsql, nameDB, password, port, host} = req.body;
    const conection = conectionDB(userPsql, nameDB, password, port, host);
    PostgresExtras.vacuum_stats(conection);
}

const conectionDB = (userPsql: string,nameDB: string, password: string, port: string, host: string) => { 
    return { database_url: `postgres://${userPsql}:${password}@${host}:${port}/${nameDB}`}
}

export {
    getIndexSize,
    getIndexCacheHit,
    getUnusedIndexes, 
    getNullIndexes, 
    getVacuumStats
}