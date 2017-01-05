package org.xc.webapp.pages.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class DefaultController {
    @RequestMapping(value = "/{path}", method = {RequestMethod.GET})
    public String dispatcher(@PathVariable("path") String path) {
        return path;
    }

    @RequestMapping(value = "", method = {RequestMethod.GET})
    public String index(HttpServletRequest request) {
        return "index";
    }

    @RequestMapping(value = {"/superadmin/{path}"}, method = {RequestMethod.GET})
    public String superadminDispatcher(@PathVariable("path") String path) {
        return "superadmin/" + path;
    }

    @RequestMapping(value = "/schooladmin/{path}", method = {RequestMethod.GET})
    public String schoolDispatcher(@PathVariable("path") String path) {
        return "schooladmin/" + path;
    }

    @RequestMapping(value = "/scripts/{path}", method = {RequestMethod.GET})
    public String script(@PathVariable("path") String path) {
        return "scripts/" + path;
    }

    @RequestMapping(value = "/mobile/{path}", method = {RequestMethod.GET})
    public String mobile(@PathVariable("path") String path) {
        return "mobile/" + path;
    }

}
