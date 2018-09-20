package controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class DiaryController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String getDiary (ModelMap model) {
        model.addAttribute("info", "WORK WORK!!!");
        return "diary";
    }
}
