DROP PROC [insert_input_condition]
DROP PROC [select_input_condition]
DROP TABLE [input_condition]

DROP PROC [insert_output_condition]
DROP PROC [select_output_condition]
DROP TABLE [output_condition]

DROP PROC [insert_lab_test]
DROP PROC [select_lab_test]
DROP TABLE [lab_test]

DROP PROC [insert_vital]
DROP PROC [select_vital]
DROP TABLE [input_vital]

DROP PROC [insert_ultrasound]
DROP PROC [select_ultrasound]
DROP TABLE [ultrasound]

DROP PROC [insert_ob_formula]
DROP PROC [select_ob_formula]
DROP TABLE [ob_formula]

DROP PROC [insert_demographic]
DROP PROC [select_demographic]
DROP TABLE [demographic]

CREATE TABLE [dbo].[input_condition](
	[id_pdd] [int] identity(1,1) NOT NULL,
	[patient_id] [int] NOT NULL,
	[physician_id] [int] NOT NULL,
	[stage_type] [int] NOT NULL,
	[condition_time] [date] NOT NULL,
	[condition_name] [nvarchar](300) NOT NULL,
	[condition_exists] [bit] NULL,
 CONSTRAINT [PK_input_condition] PRIMARY KEY CLUSTERED 
(
	[id_pdd]
)
)
GO

CREATE PROC [dbo].[insert_input_condition]
@patient_id int,
@physician_id int,
@stage_type int,
@condition_name nvarchar(300),
@condition_exists bit
AS 
	BEGIN
		INSERT INTO dbo.[input_condition]
		(patient_id, physician_id, stage_type, condition_time, condition_name, condition_exists)
		VALUES(@patient_id, @physician_id, @stage_type, getdate(), @condition_name, @condition_exists)
	END
GO

CREATE PROC [dbo].[select_input_condition]
(
@patient_id int,
@stage_type int)
AS BEGIN
SELECT patient_id, physician_id, stage_type,
CONVERT(VARCHAR, condition_time, 103) as condition_time,
condition_name, condition_exists
from dbo.[input_condition]
WHERE patient_id = @patient_id and stage_type = @stage_type
END
GO

CREATE TABLE [dbo].[output_condition](
	[id_pdd] [int] identity(1,1) NOT NULL,
	[patient_id] [int] NOT NULL,
	[physician_id] [int] NOT NULL,
	[stage_type] [int] NOT NULL,
	[condition_time] [date] NOT NULL,
	[condition_name] [nvarchar](300) NOT NULL,
	[condition_prob] [float] NULL,
 CONSTRAINT [PK_output_condition] PRIMARY KEY CLUSTERED 
(
	[id_pdd]
)
)
GO

CREATE PROC [dbo].[insert_output_condition]
@patient_id int,
@physician_id int,
@stage_type int,
@condition_name nvarchar(300),
@condition_prob float
AS 
	BEGIN
		INSERT INTO dbo.[output_condition]
		(patient_id, physician_id, stage_type, condition_time, condition_name, condition_prob)
		VALUES(@patient_id, @physician_id, @stage_type, getdate(), @condition_name, @condition_prob)
	END
GO

CREATE PROC [dbo].[select_output_condition]
(
@patient_id int,
@stage_type int)
AS BEGIN
SELECT patient_id, physician_id, stage_type,
CONVERT(VARCHAR, condition_time, 103) as condition_time,
condition_name, condition_prob
from dbo.[output_condition]
WHERE patient_id = @patient_id and stage_type = @stage_type
END
GO

CREATE TABLE [dbo].[lab_test](
	[id_pdd] [int] identity(1,1) NOT NULL,
	[patient_id] [int] NOT NULL,
	[physician_id] [int] NOT NULL,
	[stage_type] [int] NOT NULL,
	[test_time] [date] NOT NULL,
	[test_name] [nvarchar](200) NOT NULL,
	[test_value] [float] NOT NULL,
	[test_measure] [nvarchar](20) NOT NULL
 CONSTRAINT [PK_lab_test] PRIMARY KEY CLUSTERED 
(
	[id_pdd]
)
)
GO

CREATE PROC [dbo].[insert_lab_test]
@patient_id int,
@physician_id int,
@stage_type int,
@test_name nvarchar(200),
@test_value float,
@test_measure nvarchar(20)
AS 
	BEGIN
		INSERT INTO dbo.[lab_test]
		(patient_id, physician_id, stage_type, test_time,test_name,test_value,test_measure)
		VALUES(@patient_id, @physician_id, @stage_type, getdate(), @test_name, @test_value, @test_measure)
	END
GO

CREATE PROC [dbo].[select_lab_test]
(
@patient_id int,
@stage_type int)
AS BEGIN
SELECT patient_id, physician_id, stage_type,
CONVERT(VARCHAR, test_time, 103) as test_time,
test_name, test_value,test_measure
from dbo.[lab_test]
WHERE patient_id = @patient_id and stage_type = @stage_type
END
GO

CREATE TABLE [dbo].[vital](
	[id_pdd] [int] identity(1,1) NOT NULL,
	[patient_id] [int] NOT NULL,
	[physician_id] [int] NOT NULL,
	[stage_type] [int] NOT NULL,
	[vital_time] [date] NOT NULL,
	[vital_name] [nvarchar](200) NOT NULL,
	[vital_value] [float] NOT NULL,
	[vital_measure] [nvarchar](20) NOT NULL
 CONSTRAINT [PK_vital] PRIMARY KEY CLUSTERED 
(
	[id_pdd]
)
)
GO

CREATE PROC [dbo].[insert_vital]
@patient_id int,
@physician_id int,
@stage_type int,
@vital_name nvarchar(200),
@vital_value float,
@vital_measure nvarchar(20)
AS 
	BEGIN
		INSERT INTO dbo.[vital]
		(patient_id, physician_id, stage_type, vital_time, vital_name, vital_value, vital_measure)
		VALUES(@patient_id, @physician_id, @stage_type, getdate(), @vital_name, @vital_value, @vital_measure)
	END
GO

CREATE PROC [dbo].[select_vital]
(
@patient_id int,
@stage_type int)
AS BEGIN
SELECT patient_id, physician_id, stage_type,
CONVERT(VARCHAR, vital_time, 103) as vital_time,
vital_name, vital_value,vital_measure
from dbo.[vital]
WHERE patient_id = @patient_id and stage_type = @stage_type
END
GO

CREATE TABLE [dbo].[ultrasound](
	[id_pdd] [int] identity(1,1) NOT NULL,
	[patient_id] [int] NOT NULL,
	[physician_id] [int] NOT NULL,
	[stage_type] [int] NOT NULL,
	[ultrasound_time] [date] NOT NULL,
	[ultrasound_name] [nvarchar](200) NOT NULL,
	[ultrasound_value] [float] NOT NULL,
	[ultrasound_measure] [nvarchar](20) NOT NULL
 CONSTRAINT [PK_ultrasound] PRIMARY KEY CLUSTERED 
(
	[id_pdd]
)
)
GO

CREATE PROC [dbo].[insert_ultrasound]
@patient_id int,
@physician_id int,
@stage_type int,
@ultrasound_name nvarchar(200),
@ultrasound_value float,
@ultrasound_measure nvarchar(20)
AS 
	BEGIN
		INSERT INTO dbo.[ultrasound]
		(patient_id, physician_id, stage_type, ultrasound_time, ultrasound_name, ultrasound_value, ultrasound_measure)
		VALUES(@patient_id, @physician_id, @stage_type, getdate(), @ultrasound_name, @ultrasound_value, @ultrasound_measure)
	END
GO

CREATE PROC [dbo].[select_ultrasound]
(
@patient_id int,
@stage_type int)
AS BEGIN
SELECT patient_id, physician_id, stage_type,
CONVERT(VARCHAR, ultrasound_time, 103) as ultrasound_time,
ultrasound_name, ultrasound_value,ultrasound_measure
from dbo.[ultrasound]
WHERE patient_id = @patient_id and stage_type = @stage_type
END
GO

CREATE TABLE [dbo].[ob_formula](
	[id_pdd] [int] identity(1,1) NOT NULL,
	[patient_id] [int] NOT NULL,
	[physician_id] [int] NOT NULL,
	[stage_type] [int] NOT NULL,
	[p_index_dim_num] [int] NOT NULL,
	[ob_formula_time] [date] NOT NULL,
	[ob_formula_name] [nvarchar](200) NOT NULL,
	[ob_formula_value] [float] NULL,
	[ob_formula_date_value] [date] NULL
 CONSTRAINT [PK_ob_formula] PRIMARY KEY CLUSTERED 
(
	[id_pdd]
)
)
GO

CREATE PROC [dbo].[insert_ob_formula]
@patient_id int,
@physician_id int,
@stage_type int,
@p_index_dim_num int,
@ob_formula_name nvarchar(200),
@ob_formula_value float,
@ob_formula_date_value date
AS 
	BEGIN
		INSERT INTO dbo.[ob_formula]
		(patient_id, physician_id, stage_type, p_index_dim_num, ob_formula_time, ob_formula_name, ob_formula_value, ob_formula_date_value)
		VALUES(@patient_id, @physician_id, @stage_type, @p_index_dim_num, getdate(), @ob_formula_name, @ob_formula_value, @ob_formula_date_value)
	END
GO

CREATE PROC [dbo].[select_ob_formula]
(
@patient_id int,
@stage_type int)
AS BEGIN
SELECT patient_id, physician_id, stage_type, p_index_dim_num,
CONVERT(VARCHAR, ob_formula_time, 103) as ob_formula_time,
ob_formula_name, ob_formula_value, ob_formula_date_value
from dbo.[ob_formula]
WHERE patient_id = @patient_id and stage_type = @stage_type
END
GO

CREATE TABLE [dbo].[demographic](
	[id_pdd] [int] identity(1,1) NOT NULL,
	[patient_id] [int] NOT NULL,
	[physician_id] [int] NOT NULL,
	[stage_type] [int] NOT NULL,
	[demographic_time] [date] NOT NULL,
	[demographic_name] [nvarchar](100) NOT NULL,
	[demographic_value] [nvarchar](100) NOT NULL,

 CONSTRAINT [PK_demographic] PRIMARY KEY CLUSTERED 
(
	[id_pdd]
)
)
GO

CREATE PROC [dbo].[insert_demographic]
@patient_id int,
@physician_id int,
@stage_type int,
@demographic_name nvarchar(100),
@demographic_value nvarchar(100)
AS 
	BEGIN
		INSERT INTO dbo.[demographic]
		(patient_id, physician_id, stage_type, demographic_time, demographic_name, demographic_value)
		VALUES(@patient_id, @physician_id, @stage_type, getdate(), @demographic_name, @demographic_value)
	END
GO

CREATE PROC [dbo].[select_demographic]
(
@patient_id int,
@stage_type int)
AS BEGIN
SELECT patient_id, physician_id, stage_type,
CONVERT(VARCHAR, demographic_time, 103) as demographic_time,
demographic_name, demographic_value
from dbo.[demographic]
WHERE patient_id = @patient_id and stage_type = @stage_type
END
GO
