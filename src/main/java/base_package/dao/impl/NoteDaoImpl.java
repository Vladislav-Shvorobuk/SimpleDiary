package base_package.dao.impl;

import base_package.dao.NoteDao;
import base_package.dao.entity.Note;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class NoteDaoImpl implements NoteDao {

    @Autowired
    private SessionFactory sessionFactory;

    public void createNote(Note note) {

        sessionFactory.getCurrentSession().saveOrUpdate(note);
    }

}
