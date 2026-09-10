import postgres from 'postgres';

const sql = postgres('postgresql://postgres:MTkIvvZ5fLutRvuI@db.iwywxeblcmeiiiojbsee.supabase.co:5432/postgres', {
  ssl: "require"
});

export default sql;

//No PgAdmin
// import postgres from 'postgres';
// const sql = postgres('postgres://postgres:senaisp@localhost:5432/saep_db');
// export default sql;