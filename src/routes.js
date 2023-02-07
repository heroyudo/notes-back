const {
    addNoteHandler, 
    getAllNotesHandler, 
    getNoteByIdHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler,
    
} = require("./handler")

const routes=[
    {
        method: "GET",
        path : "/test",
        handler: (request, h) => {
            return 'About ... \n';
        }
    }, 
   
    {
        method: "GET",
        path : "/notes",
        handler: getAllNotesHandler,
    }, 
   
    {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
   },
    
    {
        method: "POST",
        path : "/notes",
        handler : addNoteHandler,
    }, 
    
    {
        method: "PUT",
        path : "/notes/{id}",
        handler : editNoteByIdHandler,
    }, 
    
    {
        method: "DELETE",
        path : "/notes/{id}",
        handler : deleteNoteByIdHandler,
    }, 
    
    
    
    
];

module.exports = routes;