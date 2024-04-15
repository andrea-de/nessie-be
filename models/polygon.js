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
        const { id, ...updateData } = polygon; // Extract ID and the data to update

        const { data, error } = await supabase
            .from('polygons')
            .update(updateData)
            .eq('id', id);

        if (error) throw error;

        if (!data) {
            throw new Error('Update failed');
        }
        return data;
    }

}

module.exports = Polygon;