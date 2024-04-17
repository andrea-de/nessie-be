const { supabase } = require('./index');

class Polygon {

    static async create(polygon) {
        const { data, error } = await supabase
            .from('polygons')
            .insert(polygon)
            .single();

        if (error) throw error;
        return data;
    }

    static async read(polygon) {
        const { data, error } = await supabase
            .from('polygons')
            .select()
            .eq('id', polygon.id)
            .single();

        if (error) throw error;

        if (!data) {
            throw new Error('Incorrect id');
        }
        return data;
    }

    static async readAll() {
        try {
            const { data, error } = await supabase
                .from('polygons')
                .select('*'); // Fetches all columns 

            if (error) throw error;

            return data;
        } catch (error) {
            console.error('Error fetching polygons:', error);
            throw error;
        }
    }

    static async update(polygon) {
        const { id, coordinates, status, notes, modified_by } = polygon;

        if (!id) throw new Error('No ID provided for update');
    
        // Fetch the current polygon to update notes
        const current = await supabase
            .from('polygons')
            .select('notes')
            .eq('id', id)
            .single();
    
        if (current.error) throw current.error;
    
        // Prepare the update object
        const updateData = {};
        if (coordinates) updateData.coordinates = coordinates;
        if (status) updateData.status = status;
        if (notes) updateData.notes = current.data.notes ? `${current.data.notes}\n${notes}` : notes; // Append new note line
        if (modified_by) updateData.modified_by = modified_by;
        updateData.modified_date = new Date().toISOString();
    
        const { data, error } = await supabase
            .from('polygons')
            .update(updateData)
            .eq('id', id)
            .single();
    
        if (error) throw error;
    }

}

module.exports = Polygon;