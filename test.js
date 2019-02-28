const express = require('express');
const router = express.Router();
var cors = require('cors');

const app = express();
	
app.get('/v1/jobs/id/23848f71-088b-4cb0-a279-a44ec65b7d79?', cors(),(req,res)=> {
	app.use(cors());		
			
	var type= req.query.type;
	
    res.json({
    "version": "1.0.0",
    "totalJobCount": 19,
    "jobs": [
        {
            "version": "1.0.0",
            "id": "23848f71-088b-4cb0-a279-a44ec65b7d79",
            "createdAt": "2018-12-12T12:49:16.000Z",
            "jobName": "Job 16",
            "state": {
                "code": "error",
                "reason": "repository:failed",
                "stateChangedAt": "2018-12-12T12:50:23.000Z"
            },
            "links": [
                {
                    "rel": "getJobStatusDetail",
                    "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/id/23848f71-088b-4cb0-a279-a44ec65b7d79?type=detail"
                }
            ]
        },
        {
            "version": "1.0.0",
            "id": "1b0a1d24-9259-4b94-b799-433ec7d2096c",
            "createdAt": "2018-12-12T12:49:02.000Z",
            "jobName": "Job 16",
            "state": {
                "code": "error",
                "reason": "repository:failed",
                "stateChangedAt": "2018-12-12T12:50:09.000Z"
            },
            "links": [
                {
                    "rel": "getJobStatusDetail",
                    "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/id/1b0a1d24-9259-4b94-b799-433ec7d2096c?type=detail"
                }
            ]
        },
        {
            "version": "1.0.0",
            "id": "980f2420-76d3-4e18-83ac-78f73c2aa1ae",
            "createdAt": "2018-12-03T15:52:15.000Z",
            "jobName": "Job 15",
            "state": {
                "code": "error",
                "reason": "repository:failed",
                "stateChangedAt": "2018-12-03T15:52:21.000Z"
            },
            "links": [
                {
                    "rel": "getJobStatusDetail",
                    "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/id/980f2420-76d3-4e18-83ac-78f73c2aa1ae?type=detail"
                }
            ]
        },
        {
            "version": "1.0.0",
            "id": "9db6642b-47c0-4917-b40c-326a9f980ea8",
            "createdAt": "2018-11-30T05:33:58.000Z",
            "jobName": "Job 15",
            "state": {
                "code": "error",
                "reason": "repository:failed",
                "stateChangedAt": "2018-11-30T05:34:03.000Z"
            },
            "links": [
                {
                    "rel": "getJobStatusDetail",
                    "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/id/9db6642b-47c0-4917-b40c-326a9f980ea8?type=detail"
                }
            ]
        },
        {
            "version": "1.0.0",
            "id": "094f0a0b-13a9-4402-880f-84e7990ef720",
            "createdAt": "2018-11-19T06:27:53.000Z",
            "jobName": "job14",
            "state": {
                "code": "error",
                "reason": "repository:failed",
                "stateChangedAt": "2018-11-19T06:27:59.000Z"
            },
            "links": [
                {
                    "rel": "getJobStatusDetail",
                    "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/id/094f0a0b-13a9-4402-880f-84e7990ef720?type=detail"
                }
            ]
        },
        {
            "version": "1.0.0",
            "id": "8c9af0d0-d31e-4449-aeb8-1d7f696fd27e",
            "createdAt": "2018-11-19T06:26:07.000Z",
            "jobName": "job13",
            "state": {
                "code": "error",
                "reason": "repository:failed",
                "stateChangedAt": "2018-11-19T06:26:11.000Z"
            },
            "links": [
                {
                    "rel": "getJobStatusDetail",
                    "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/id/8c9af0d0-d31e-4449-aeb8-1d7f696fd27e?type=detail"
                }
            ]
        },
        {
            "version": "1.0.0",
            "id": "e708cf8c-b274-444a-8766-7ce7af17335b",
            "createdAt": "2018-11-19T06:09:24.000Z",
            "jobName": "job12",
            "state": {
                "code": "error",
                "reason": "repository:failed",
                "stateChangedAt": "2018-11-19T06:09:28.000Z"
            },
            "links": [
                {
                    "rel": "getJobStatusDetail",
                    "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/id/e708cf8c-b274-444a-8766-7ce7af17335b?type=detail"
                }
            ]
        },
        {
            "version": "1.0.0",
            "id": "9943c492-36ec-49d3-9cc4-db027543e812",
            "createdAt": "2018-11-19T06:08:34.000Z",
            "jobName": "job11",
            "state": {
                "code": "error",
                "reason": "repository:failed",
                "stateChangedAt": "2018-11-19T06:08:39.000Z"
            },
            "links": [
                {
                    "rel": "getJobStatusDetail",
                    "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/id/9943c492-36ec-49d3-9cc4-db027543e812?type=detail"
                }
            ]
        },
        {
            "version": "1.0.0",
            "id": "3d183d1f-c094-4df0-9d54-0e8d88fe26e9",
            "createdAt": "2018-11-16T07:03:19.000Z",
            "jobName": "job6",
            "state": {
                "code": "error",
                "reason": "repository:failed",
                "stateChangedAt": "2018-11-16T07:03:23.000Z"
            },
            "links": [
                {
                    "rel": "getJobStatusDetail",
                    "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/id/3d183d1f-c094-4df0-9d54-0e8d88fe26e9?type=detail"
                }
            ]
        },
        {
            "version": "1.0.0",
            "id": "7b62b166-6be2-4012-a198-7f606fdcb2a2",
            "createdAt": "2018-11-16T07:03:06.000Z",
            "jobName": "job8",
            "state": {
                "code": "error",
                "reason": "repository:failed",
                "stateChangedAt": "2018-11-16T07:03:10.000Z"
            },
            "links": [
                {
                    "rel": "getJobStatusDetail",
                    "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/id/7b62b166-6be2-4012-a198-7f606fdcb2a2?type=detail"
                }
            ]
        }
    ],
    "links": [
        {
            "rel": "next",
            "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/all?offset=2&limit=10&orderBy=desc"
        },
        {
            "rel": "last",
            "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/all?offset=2&limit=10&orderBy=desc"
        }
    ] 
});
});
app.get('/v1/jobs/all?', cors(),(req,res)=> {
	app.use(cors());		
			
	var type= req.query.offset;
	
    res.json({
    "version": "1.0.0",
    "totalJobCount": 19,
    "jobs": [
        {
            "version": "1.0.0",
            "id": "23848f71-088b-4cb0-a279-a44ec65b7d79",
            "createdAt": "2018-12-12T12:49:16.000Z",
            "jobName": "Job 16",
            "state": {
                "code": "error",
                "reason": "repository:failed",
                "stateChangedAt": "2018-12-12T12:50:23.000Z"
            },
            "links": [
                {
                    "rel": "getJobStatusDetail",
                    "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/id/23848f71-088b-4cb0-a279-a44ec65b7d79?type=detail"
                }
            ]
        },
        {
            "version": "1.0.0",
            "id": "1b0a1d24-9259-4b94-b799-433ec7d2096c",
            "createdAt": "2018-12-12T12:49:02.000Z",
            "jobName": "Job 16",
            "state": {
                "code": "error",
                "reason": "repository:failed",
                "stateChangedAt": "2018-12-12T12:50:09.000Z"
            },
            "links": [
                {
                    "rel": "getJobStatusDetail",
                    "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/id/1b0a1d24-9259-4b94-b799-433ec7d2096c?type=detail"
                }
            ]
        },
        {
            "version": "1.0.0",
            "id": "980f2420-76d3-4e18-83ac-78f73c2aa1ae",
            "createdAt": "2018-12-03T15:52:15.000Z",
            "jobName": "Job 15",
            "state": {
                "code": "error",
                "reason": "repository:failed",
                "stateChangedAt": "2018-12-03T15:52:21.000Z"
            },
            "links": [
                {
                    "rel": "getJobStatusDetail",
                    "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/id/980f2420-76d3-4e18-83ac-78f73c2aa1ae?type=detail"
                }
            ]
        },
        {
            "version": "1.0.0",
            "id": "9db6642b-47c0-4917-b40c-326a9f980ea8",
            "createdAt": "2018-11-30T05:33:58.000Z",
            "jobName": "Job 15",
            "state": {
                "code": "error",
                "reason": "repository:failed",
                "stateChangedAt": "2018-11-30T05:34:03.000Z"
            },
            "links": [
                {
                    "rel": "getJobStatusDetail",
                    "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/id/9db6642b-47c0-4917-b40c-326a9f980ea8?type=detail"
                }
            ]
        },
        {
            "version": "1.0.0",
            "id": "094f0a0b-13a9-4402-880f-84e7990ef720",
            "createdAt": "2018-11-19T06:27:53.000Z",
            "jobName": "job14",
            "state": {
                "code": "error",
                "reason": "repository:failed",
                "stateChangedAt": "2018-11-19T06:27:59.000Z"
            },
            "links": [
                {
                    "rel": "getJobStatusDetail",
                    "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/id/094f0a0b-13a9-4402-880f-84e7990ef720?type=detail"
                }
            ]
        },
        {
            "version": "1.0.0",
            "id": "8c9af0d0-d31e-4449-aeb8-1d7f696fd27e",
            "createdAt": "2018-11-19T06:26:07.000Z",
            "jobName": "job13",
            "state": {
                "code": "error",
                "reason": "repository:failed",
                "stateChangedAt": "2018-11-19T06:26:11.000Z"
            },
            "links": [
                {
                    "rel": "getJobStatusDetail",
                    "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/id/8c9af0d0-d31e-4449-aeb8-1d7f696fd27e?type=detail"
                }
            ]
        },
        {
            "version": "1.0.0",
            "id": "e708cf8c-b274-444a-8766-7ce7af17335b",
            "createdAt": "2018-11-19T06:09:24.000Z",
            "jobName": "job12",
            "state": {
                "code": "error",
                "reason": "repository:failed",
                "stateChangedAt": "2018-11-19T06:09:28.000Z"
            },
            "links": [
                {
                    "rel": "getJobStatusDetail",
                    "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/id/e708cf8c-b274-444a-8766-7ce7af17335b?type=detail"
                }
            ]
        },
        {
            "version": "1.0.0",
            "id": "9943c492-36ec-49d3-9cc4-db027543e812",
            "createdAt": "2018-11-19T06:08:34.000Z",
            "jobName": "job11",
            "state": {
                "code": "error",
                "reason": "repository:failed",
                "stateChangedAt": "2018-11-19T06:08:39.000Z"
            },
            "links": [
                {
                    "rel": "getJobStatusDetail",
                    "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/id/9943c492-36ec-49d3-9cc4-db027543e812?type=detail"
                }
            ]
        },
        {
            "version": "1.0.0",
            "id": "3d183d1f-c094-4df0-9d54-0e8d88fe26e9",
            "createdAt": "2018-11-16T07:03:19.000Z",
            "jobName": "job6",
            "state": {
                "code": "error",
                "reason": "repository:failed",
                "stateChangedAt": "2018-11-16T07:03:23.000Z"
            },
            "links": [
                {
                    "rel": "getJobStatusDetail",
                    "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/id/3d183d1f-c094-4df0-9d54-0e8d88fe26e9?type=detail"
                }
            ]
        },
        {
            "version": "1.0.0",
            "id": "7b62b166-6be2-4012-a198-7f606fdcb2a2",
            "createdAt": "2018-11-16T07:03:06.000Z",
            "jobName": "job8",
            "state": {
                "code": "error",
                "reason": "repository:failed",
                "stateChangedAt": "2018-11-16T07:03:10.000Z"
            },
            "links": [
                {
                    "rel": "getJobStatusDetail",
                    "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/id/7b62b166-6be2-4012-a198-7f606fdcb2a2?type=detail"
                }
            ]
        }
    ],
    "links": [
        {
            "rel": "next",
            "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/all?offset=2&limit=10&orderBy=desc"
        },
        {
            "rel": "last",
            "href": "https://jees-pie.hp8.us/tenzing/v1/jobs/all?offset=2&limit=10&orderBy=desc"
        }
    ] 
});
});
app.listen(2000, () => console.log('sertver stated on the portn 2000'))