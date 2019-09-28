/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.util.HashMap;
import java.util.Map;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Lukas Bjornvad
 */


@Path("generic")
public class GenericResource {

    @Context
    private UriInfo context;
    private  static Map<String, String> map = new HashMap<String,String>();
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();
  
   
    /**
     * Creates a new instance of GenericResource
     */
    public GenericResource() {  
        map.put("name","Peter Pan");
    }

@Path("/name/{name}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String getById(@PathParam("name") String name) {
        
     return GSON.toJson(map.get(name));
    }
    
     @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAllJokesList() {
        
        return GSON.toJson(map);
    }
       @POST
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
    public String addToMap( String name) {
               Object k= GSON.fromJson(name, Object.class);
               String split = k.toString().split("\\u003d")[1].split("}")[0];
        map.put("name"+map.size(),split);
     return GSON.toJson(map);
    }
    
    @Path("/remname/{name}")
    @DELETE
    @Produces({MediaType.APPLICATION_JSON})
    public String deleteByName(@PathParam("name") String name) {
        map.remove(name);
     return GSON.toJson("msg : Removed "+name);
    }
    @PUT
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Path("/{id}")
public String editPerson(String name) {
   Object k= GSON.fromJson(name, Object.class);
               String split = k.toString().split("\\u003d")[1].split("}")[0];
               String key = k.toString().split("\\u003d")[0].split("{")[1];
               System.out.println(key);
               map.replace("name", split);
       return GSON.toJson(map);
}
}
