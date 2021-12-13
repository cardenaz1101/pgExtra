import { Router } from "express";
const router = Router();
import { 
    getIndexSize,
    getIndexCacheHit,
    getUnusedIndexes,
    getNullIndexes, 
    getVacuumStats
} from "../controllers/index";

router.get('/pg-extra/getIndexSize', getIndexSize);
router.get('/pg-extra/getIndexCacheHit', getIndexCacheHit);
router.get('/pg-extra/getUnusedIndexes', getUnusedIndexes);
router.get('/pg-extra/getNullIndexes', getNullIndexes);
router.get('/pg-extra/getVacuumStats', getVacuumStats);

export default router;